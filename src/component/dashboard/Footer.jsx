import React from 'react'

function Footer() {
  return (
    <>
       <footer className="bg-white border-t border-gray-200 px-6 py-2 fixed bottom-0 flex w-full bg-white border-gray-200 z-99999 dark:border-gray-800 dark:bg-gray-900 lg:border-b">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                      <p>&copy; 2025 Circlow. All rights reserved.</p>
                      <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-1 hover:text-gray-700">
                              <i className="fas fa-moon"></i>
                          </button>
                      </div>
                  </div>
              </footer>
    </>
  )
}

export default Footer