import React from 'react'
import Sidebar from '../../component/dashboard/Sidebar'
import Header from '../../component/dashboard/Header'
import EChartsBarChart from './component/EChartsBarChart';
import EChartsPieChart from './component/EChartsPieChart';


function Dashboard() {
    const statsData = [
        {
            title: 'Total Contacts',
            icon: 'fas fa-users',
            iconColor: 'text-orange-500',
            iconBg: 'bg-orange-100',
            value: '237',
            change: '+8.5%',
            changeColor: 'text-green-500',
            description: 'From Last Month',
        },
        {
            title: 'Open Deals',
            icon: 'fas fa-handshake',
            iconColor: 'text-yellow-500',
            iconBg: 'bg-yellow-100',
            value: '43',
            change: '+6.2%',
            changeColor: 'text-green-500',
            description: 'From Last Month',
        },
        {
            title: 'Revenue',
            icon: 'fas fa-dollar-sign',
            iconColor: 'text-green-500',
            iconBg: 'bg-green-100',
            value: '$128.5k',
            change: '-4.6%',
            changeColor: 'text-red-500',
            description: 'From Last Month',
        },
        {
            title: 'Avg. Response Time',
            icon: 'fas fa-clock',
            iconColor: 'text-blue-500',
            iconBg: 'bg-blue-100',
            value: '2.4h',
            change: '+7%',
            changeColor: 'text-green-500',
            description: 'From Last Month',
        },
    ];

    return (
        <><div className="mb-4">
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
            <p className="text-sm text-gray-500/70 ">
                Track your sales and goal
            </p>
        </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {statsData.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-2xl border border-gray-200 w-full"
                    >
                        <div className="flex flex-col  justify-between">
                                <div className='flex justify-between w-full items-center'>
                                    <h3 className="text-sm text-gray-500 font-medium mb-1">{item.title}</h3>
                                    <div
                                        className={`w-9 h-9 rounded-lg flex items-center justify-center ${item.iconBg}`}
                                    >
                                        <i className={`${item.icon} ${item.iconColor} text-sm`} />
                                    </div>
                                </div>

                                <div className="text-[22px] font-bold text-gray-900 leading-snug">{item.value}</div>
                                <div className="text-xs flex justify-between w-full items-center space-x-1 mt-1">
                                    <span className="text-gray-400">{item.description}</span>
                                    <span className={`${item.changeColor} font-medium`}>{item.change}</span>
                                </div>

                        </div>
                    </div>
                ))}

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <EChartsBarChart />
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                   <EChartsPieChart />
                   </div>
            </div>

            <div className="my-8 bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Manage Your Contact</h3>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-2">
                            <i className="fas fa-plus"></i>
                            <span>Add Contact</span>
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">Sarah Johnson</div>
                                        <div className="text-sm text-gray-500">sarah.j@company.com</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">InnovateTech Solutions</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$15,000</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Traffic Generation</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <i className="fas fa-ellipsis-h"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">Michael Chen</div>
                                        <div className="text-sm text-gray-500">m.chen@bluecom.com</div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">BlueCom Industries</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$25,000</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Traffic Generation</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <i className="fas fa-ellipsis-h"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Dashboard