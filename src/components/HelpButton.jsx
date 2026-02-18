import React from 'react';
import { useAppStore } from '../store/appStore';

const HelpButton = () => {
  const helpDialogOpen = useAppStore((state) => state.helpDialogOpen);
  const toggleHelpDialog = useAppStore((state) => state.toggleHelpDialog);
  const closeHelpDialog = useAppStore((state) => state.closeHelpDialog);

  return (
    <>
      {/* Floating Help Button */}
      <button
        className="help-button"
        onClick={toggleHelpDialog}
        title="Help and SMS Commands"
        aria-label="Help and SMS Commands"
      >
        <i className="fas fa-question"></i>
      </button>

      {/* Help Dialog */}
      {helpDialogOpen && (
        <div className="help-dialog">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-coffee-dark">SMS Commands</h3>
            <button
              onClick={closeHelpDialog}
              className="text-gray-400 hover:text-gray-600"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <i className="fas fa-tag text-green-primary mt-1 mr-2"></i>
              <div>
                <strong>PRICE</strong> - Get current coffee prices
              </div>
            </li>
            <li className="flex items-start">
              <i className="fas fa-weight text-green-primary mt-1 mr-2"></i>
              <div>
                <strong>WEIGHT 150KG</strong> - Report harvest weight
              </div>
            </li>
            <li className="flex items-start">
              <i className="fas fa-bell text-green-primary mt-1 mr-2"></i>
              <div>
                <strong>ALERT</strong> - Check latest alerts
              </div>
            </li>
            <li className="flex items-start">
              <i className="fas fa-info-circle text-green-primary mt-1 mr-2"></i>
              <div>
                <strong>HELP</strong> - See these commands
              </div>
            </li>
          </ul>

          <div className="mt-4 pt-3 border-t text-xs text-gray-500">
            Send commands to: <strong>22000</strong>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpButton;