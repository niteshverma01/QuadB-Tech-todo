import React, { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdAdd, MdAlarm, MdCalendarToday, MdRepeat, MdDelete } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

const TodoDetails = () => {
  const [important, setImportant] = useState(false);
  const [dueDate, setDueDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
    setShowDatePicker(false);
  };

  return (
    <div className="w-[30%] h-screen p-6 bg-[#EEF6EF] border-l border-gray-200 rounded-lg shadow-lg ">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl font-semibold text-gray-800">Buy groceries</h2>
        <button
          onClick={() => setImportant(!important)}
          className="text-gray-400 hover:text-yellow-500 focus:outline-none"
        >
          {important ? <FaStar className="text-yellow-500" size={20} /> : <FaRegStar size={20} />}
        </button>
      </div>

      {/* Task Actions */}
      <ul className="space-y-6">
        {/* Add Step */}
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <MdAdd className="text-gray-500 w-6 h-6" />
            <span className="text-gray-700 text-base font-medium cursor-pointer hover:text-gray-900">
              Add Step
            </span>
          </div>
        </li>

        {/* Set Reminder */}
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <MdAlarm className="text-gray-500 w-6 h-6" />
            <span className="text-gray-700 text-base font-medium cursor-pointer hover:text-gray-900">
              Set Reminder
            </span>
          </div>
        </li>

        {/* Add Due Date */}
        <li>
          <div
            className="flex items-center justify-between cursor-pointer hover:text-gray-900"
            onClick={() => setShowDatePicker(!showDatePicker)}
          >
            <div className="flex items-center space-x-4">
              <MdCalendarToday className="text-gray-500 w-6 h-6" />
              <span className="text-gray-700 text-base font-medium">Add Due Date</span>
            </div>
          </div>
          {showDatePicker && (
            <div className="ml-10 mt-4 bg-white border border-gray-300 rounded-lg p-4 shadow-md">
              <input
                type="date"
                className="text-sm text-gray-700 border border-gray-300 rounded-md p-2 w-full"
                onChange={handleDateChange}
              />
              <div className="flex justify-end mt-2 space-x-4">
                <button
                  className="text-gray-500 hover:text-gray-700 text-sm font-medium"
                  onClick={() => setShowDatePicker(false)}
                >
                  Cancel
                </button>
                <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                  OK
                </button>
              </div>
            </div>
          )}
        </li>

        {/* Repeat */}
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <MdRepeat className="text-gray-500 w-6 h-6" />
            <span className="text-gray-700 text-base font-medium cursor-pointer hover:text-gray-900">
              Repeat
            </span>
          </div>
        </li>

        {/* Add Notes */}
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <MdAdd className="text-gray-500 w-6 h-6" />
            <span className="text-gray-700 text-base font-medium cursor-pointer hover:text-gray-900">
              Add Notes
            </span>
          </div>
        </li>
      </ul>

      {/* Footer */}
      <div className="mt-12 flex justify-between items-center text-sm text-gray-500 border-t pt-4">
        <span className="text-gray-600">Created Today</span>
        <div className="flex items-center space-x-4">
          <button
            className="text-gray-400 hover:text-gray-600 focus:outline-none"
            aria-label="Close Task Details"
          >
            <AiOutlineClose size={20} />
          </button>
          <button
            className="text-gray-400 hover:text-red-500 focus:outline-none"
            aria-label="Delete Task"
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoDetails;
