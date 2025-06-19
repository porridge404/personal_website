import React, { useState } from 'react';
import { FileText, Presentation, ExternalLink, Settings, CheckCircle, AlertCircle } from 'lucide-react';

interface GoogleAccount {
  email: string;
  name: string;
  avatar: string;
  isConnected: boolean;
}

const GoogleIntegrations: React.FC = () => {
  const [account, setAccount] = useState<GoogleAccount | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Mock Google OAuth flow
  const connectGoogleAccount = async () => {
    setIsConnecting(true);
    setConnectionStatus('idle');

    try {
      // Simulate OAuth flow
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Mock successful connection
      const mockAccount: GoogleAccount = {
        email: 'stuart@stuc.me',
        name: 'Stuart Cansdale',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
        isConnected: true
      };

      setAccount(mockAccount);
      setConnectionStatus('success');
      localStorage.setItem('google_account', JSON.stringify(mockAccount));

    } catch (error) {
      setConnectionStatus('error');
      console.error('Google connection failed:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectAccount = () => {
    setAccount(null);
    setConnectionStatus('idle');
    localStorage.removeItem('google_account');
  };

  // Load cached account on mount
  React.useEffect(() => {
    const cachedAccount = localStorage.getItem('google_account');
    if (cachedAccount) {
      try {
        setAccount(JSON.parse(cachedAccount));
      } catch (error) {
        console.error('Failed to parse cached Google account:', error);
      }
    }
  }, []);

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
          <Settings size={20} className="text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Google Workspace</h3>
          <p className="text-sm text-gray-400">Connect to sync Colab notebooks and Slides</p>
        </div>
      </div>

      {!account ? (
        <div>
          <div className="mb-6">
            <h4 className="text-white font-medium mb-3">Available Integrations:</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <FileText size={16} className="text-orange-400" />
                <span className="text-sm">Google Colab Notebooks</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Presentation size={16} className="text-blue-400" />
                <span className="text-sm">Google Slides Presentations</span>
              </div>
            </div>
          </div>

          <button
            onClick={connectGoogleAccount}
            disabled={isConnecting}
            className="w-full bg-white text-gray-900 py-3 px-4 rounded-lg font-medium hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isConnecting ? (
              <>
                <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                <span>Connecting...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Connect with Google</span>
              </>
            )}
          </button>

          {connectionStatus === 'error' && (
            <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm flex items-center space-x-2">
              <AlertCircle size={16} />
              <span>Connection failed. Please try again.</span>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img 
              src={account.avatar} 
              alt={account.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-white font-medium">{account.name}</p>
              <p className="text-gray-400 text-sm">{account.email}</p>
            </div>
            <CheckCircle size={20} className="text-green-400 ml-auto" />
          </div>

          <div className="bg-slate-700 border border-slate-600 rounded-lg p-4 mb-4">
            <h4 className="text-white font-medium mb-2">Connected Services:</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <FileText size={14} className="text-orange-400" />
                  <span className="text-sm text-gray-300">Google Colab</span>
                </div>
                <span className="text-xs text-green-400">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Presentation size={14} className="text-blue-400" />
                  <span className="text-sm text-gray-300">Google Slides</span>
                </div>
                <span className="text-xs text-green-400">Active</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-3">
            <button className="flex-1 bg-slate-700 border border-slate-600 text-white py-2 px-4 rounded-lg text-sm hover:bg-slate-600 transition-colors">
              Sync Now
            </button>
            <button 
              onClick={disconnectAccount}
              className="text-red-400 hover:text-red-300 py-2 px-4 text-sm transition-colors"
            >
              Disconnect
            </button>
          </div>

          {connectionStatus === 'success' && (
            <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm flex items-center space-x-2">
              <CheckCircle size={16} />
              <span>Successfully connected to Google Workspace!</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GoogleIntegrations;