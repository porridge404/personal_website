import React, { useState, useEffect } from 'react';
import { Linkedin, RefreshCw, CheckCircle, AlertCircle, X } from 'lucide-react';

interface LinkedInProfile {
  name: string;
  headline: string;
  location: string;
  profilePicture: string;
  experience: Array<{
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  lastSyncTime: Date;
}

const LinkedInSync: React.FC = () => {
  const [profile, setProfile] = useState<LinkedInProfile | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isVisible, setIsVisible] = useState(true);

  // Simulate LinkedIn connection check
  useEffect(() => {
    const checkConnection = () => {
      const hasLinkedInAuth = localStorage.getItem('linkedin_access_token');
      setIsConnected(!!hasLinkedInAuth);
    };

    checkConnection();
  }, []);

  const connectToLinkedIn = () => {
    console.log('LinkedIn OAuth would redirect here in production');
    
    // Simulate successful connection
    setTimeout(() => {
      localStorage.setItem('linkedin_access_token', 'demo_token');
      setIsConnected(true);
      syncWithLinkedIn();
    }, 1000);
  };

  const syncWithLinkedIn = async () => {
    if (!isConnected) {
      connectToLinkedIn();
      return;
    }

    setIsSyncing(true);
    setSyncStatus('idle');

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mock LinkedIn data
      const mockProfile: LinkedInProfile = {
        name: 'Stuart Cansdale',
        headline: 'Software Engineer & Technology Leader',
        location: 'United Kingdom',
        profilePicture: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
        experience: [
          {
            title: 'Senior Software Engineer',
            company: 'Tech Solutions Ltd',
            startDate: '2022-01',
            endDate: 'Present',
            description: 'Leading development of scalable web applications and mentoring junior developers.'
          },
          {
            title: 'Full Stack Developer',
            company: 'Digital Innovations',
            startDate: '2020-03',
            endDate: '2021-12',
            description: 'Built and maintained full-stack applications using modern technologies.'
          }
        ],
        lastSyncTime: new Date()
      };

      setProfile(mockProfile);
      setSyncStatus('success');
      localStorage.setItem('linkedin_profile', JSON.stringify(mockProfile));

    } catch (error) {
      console.error('LinkedIn sync failed:', error);
      setSyncStatus('error');
    } finally {
      setIsSyncing(false);
    }
  };

  const disconnectLinkedIn = () => {
    localStorage.removeItem('linkedin_access_token');
    localStorage.removeItem('linkedin_profile');
    setIsConnected(false);
    setProfile(null);
    setSyncStatus('idle');
  };

  // Load cached profile on mount
  useEffect(() => {
    const cachedProfile = localStorage.getItem('linkedin_profile');
    if (cachedProfile) {
      try {
        const parsed = JSON.parse(cachedProfile);
        parsed.lastSyncTime = new Date(parsed.lastSyncTime);
        setProfile(parsed);
      } catch (error) {
        console.error('Failed to parse cached LinkedIn profile:', error);
      }
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 shadow-lg max-w-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Linkedin size={20} className="text-blue-400" />
            <span className="text-white font-medium">LinkedIn Sync</span>
          </div>
          <div className="flex items-center space-x-2">
            {syncStatus === 'success' && (
              <CheckCircle size={16} className="text-green-400" />
            )}
            {syncStatus === 'error' && (
              <AlertCircle size={16} className="text-red-400" />
            )}
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {!isConnected ? (
          <div>
            <p className="text-gray-400 text-sm mb-3">
              Connect your LinkedIn to auto-sync your professional information
            </p>
            <button
              onClick={connectToLinkedIn}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
            >
              Connect LinkedIn
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-green-400 text-sm">Connected</span>
              <button
                onClick={syncWithLinkedIn}
                disabled={isSyncing}
                className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 text-sm disabled:opacity-50 transition-colors"
              >
                <RefreshCw size={14} className={isSyncing ? 'animate-spin' : ''} />
                <span>{isSyncing ? 'Syncing...' : 'Sync'}</span>
              </button>
            </div>

            {profile && (
              <div className="text-xs text-gray-400 mb-2">
                Last synced: {profile.lastSyncTime.toLocaleString()}
              </div>
            )}

            <button
              onClick={disconnectLinkedIn}
              className="text-red-400 hover:text-red-300 text-xs transition-colors"
            >
              Disconnect
            </button>
          </div>
        )}

        {syncStatus === 'success' && (
          <div className="mt-2 p-2 bg-green-500/10 border border-green-500/30 rounded text-green-400 text-xs">
            Profile synced successfully!
          </div>
        )}

        {syncStatus === 'error' && (
          <div className="mt-2 p-2 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-xs">
            Sync failed. Please try again.
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkedInSync;