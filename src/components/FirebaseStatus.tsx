import React from 'react';
import { useFirebaseConnection } from '../hooks/useFirebase';
import { Database, CheckCircle, AlertCircle, Settings } from 'lucide-react';

const FirebaseStatus: React.FC = () => {
  const { isConnected, error } = useFirebaseConnection();

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 shadow-lg">
        <div className="flex items-center space-x-2">
          <Database size={16} className="text-orange-400" />
          <span className="text-white text-sm font-medium">Firebase</span>
          {isConnected ? (
            <CheckCircle size={16} className="text-green-400" />
          ) : (
            <AlertCircle size={16} className="text-red-400" />
          )}
        </div>
        
        <div className="mt-1">
          <span className={`text-xs ${isConnected ? 'text-green-400' : 'text-red-400'}`}>
            {isConnected ? 'Connected' : error || 'Not configured'}
          </span>
        </div>

        {!isConnected && (
          <div className="mt-2 pt-2 border-t border-slate-600">
            <div className="flex items-center space-x-1 text-gray-400">
              <Settings size={12} />
              <span className="text-xs">Setup required</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FirebaseStatus;