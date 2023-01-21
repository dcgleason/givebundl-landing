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
            <div className="bg-blue-500 rounded-full w-4 h-4 mr-2"></div>
          )}
          <div className="text-center">
            <span>{formatMinutes(recordingMinutes)}</span>
            <span>:</span>
            <span>{formatSeconds(recordingSeconds)}</span>
          </div>
        </div>
        {initRecording && (
          <div className="ml-auto">
            <button
              className="bg-red-500 text-white rounded-md p-2"
              title="Cancel recording"
              onClick={cancelRecording}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        )}
      </div>
      <div className="my-4">
        {initRecording ? (
          <button
            className="bg-green-500 text-white rounded-md p-2"
            title="Save recording"
            disabled={recordingSeconds === 0}
            onClick={saveRecording}
            >
            <FontAwesomeIcon icon={faSave} size="2x" />
            </button>
            ) : (
               
            <button
                    className="bg-blue-500 text-white rounded-md p-2"
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