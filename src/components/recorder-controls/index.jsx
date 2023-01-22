import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faTimes, faSave } from "@fortawesome/free-solid-svg-icons";
import { formatMinutes, formatSeconds } from "../../utils/format-time";
import { useState } from "react";

export default function RecorderControls({ recorderState, handlers}) {
  const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
  const { startRecording, saveRecording, cancelRecording } = handlers;




  return (
    <div className="flex flex-col items-center">
      <div className="flex">
        <div className="flex items-center">
          {initRecording && (
            <div className="bg-red-500 rounded-full w-4 h-4 mr-2"></div>
          )}
          <div className="text-center">
            <span>{formatMinutes(recordingMinutes)}</span>
            <span>:</span>
            <span>{formatSeconds(recordingSeconds)}</span>
          </div>
        </div>
        {/* {initRecording && (
          
        )} */}
      </div>
      <div className="my-4">
        {initRecording ? (
          <div className="flex justify-center space-x-4">
          <button
            className="bg-slate-300 text-white rounded-md p-2 h-20"
            title="Save recording"
            disabled={recordingSeconds === 0}
            onClick={saveRecording}
            >
           Save <br></br> <FontAwesomeIcon icon={faSave} /> 
            </button>
            <button
              className="bg-red-500 text-white rounded-md p-2 h-20"
              title="Cancel recording"
              onClick={cancelRecording}
            >
            Cancel <br></br> <FontAwesomeIcon icon={faTimes} />
            </button>
            </div>
            
            ) : (
               
            <button
                    className="bg-red-400 text-white rounded-md p-2"
                    title="Start recording"
                    onClick={startRecording}
                
                  >
            <FontAwesomeIcon icon={faMicrophone} size="2x" />
            </button>
               
                  
            )}
            </div>
            </div>
            );
            }