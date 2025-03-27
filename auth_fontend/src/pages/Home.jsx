import React from 'react';
import { FiHome, FiUsers, FiSettings, FiPackage, FiLogOut } from 'react-icons/fi';
import { FaChartBar, FaMedal, FaUserShield, FaClipboardList, FaBriefcaseMedical } from 'react-icons/fa';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, ResponsiveContainer } from 'recharts';
import ApiService from '../services/apiService';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const stats = [
        { title: 'Total Personnel', value: '12,234', change: '+120', icon: <FaUserShield className="h-6 w-6" /> },
        { title: 'Medical Units', value: '89', change: '+3', icon: <FaBriefcaseMedical className="h-6 w-6" /> },
        { title: 'Active Operations', value: '24', change: '+2', icon: <FaMedal className="h-6 w-6" /> },
    ];

    const chartData = [
        { name: 'Jan', personnel: 12000, operations: 20, medical: 85 },
        { name: 'Feb', personnel: 12100, operations: 22, medical: 86 },
        { name: 'Mar', personnel: 12150, operations: 23, medical: 87 },
        { name: 'Apr', personnel: 12180, operations: 23, medical: 88 },
        { name: 'May', personnel: 12200, operations: 24, medical: 88 },
        { name: 'Jun', personnel: 12234, operations: 24, medical: 89 },
    ];

    const handleLogout = (e) => {
        e.preventDefault();
        
        ApiService.post(`/logout`, []).then((response) => {
            console.log(response);
            
            if (response.status === 200) {

                toast.success(`Success Notification !  Logout successfully`, {
                    position: "top-right"
                });
                localStorage.removeItem("accessToken");
                localStorage.removeItem("userData");
                // localStorage.removeItem("userToken");
                // navigate("../home", { replace: true });
                window.location.href = '/sign-in'
                // navigate('/sign-in')
            }
        }).catch((error) => {
            toast.error(`Error Notification ! ${error}`, {
                position: "top-right"
            });
        });

    };

    return (
        <div className="flex h-screen bg-gray-50">
            <ToastContainer/>
            {/* Military-themed Sidebar */}
            <div className="w-64 bg-gradient-to-b from-green-900 to-green-800 text-white">
                <div className="p-6 flex items-center space-x-3">
                    <img src="/army-logo.png" alt="Army Logo" className="w-10 h-10" />
                    <h2 className="text-xl font-bold">BA Command Center</h2>
                </div>
                <nav className="mt-8">
                    <a className="flex items-center px-6 py-3 text-white bg-green-950" href="#">
                        <FiHome className="h-5 w-5" />
                        <span className="mx-3">Command Dashboard</span>
                    </a>
                    <a className="flex items-center px-6 py-3 text-gray-200 hover:bg-green-700" href="#">
                        <FaUserShield className="h-5 w-5" />
                        <span className="mx-3">Personnel</span>
                    </a>
                    <a className="flex items-center px-6 py-3 text-gray-200 hover:bg-green-700" href="#">
                        <FaClipboardList className="h-5 w-5" />
                        <span className="mx-3">Operations</span>
                    </a>
                    <a className="flex items-center px-6 py-3 text-gray-200 hover:bg-green-700" href="#">
                        <FaBriefcaseMedical className="h-5 w-5" />
                        <span className="mx-3">Medical Units</span>
                    </a>
                    <a className="flex items-center px-6 py-3 text-gray-200 hover:bg-green-700" href="#">
                        <FiSettings className="h-5 w-5" />
                        <span className="mx-3">Settings</span>
                    </a>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-hidden">
                <header className="bg-white shadow-sm border-b border-gray-200">
                    <div className="flex items-center justify-between px-8 py-4">
                        <h1 className="text-2xl font-bold text-green-900">Command Dashboard</h1>
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600">Col. John Doe</span>
                            <button onClick={handleLogout} className="flex items-center px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-all duration-300">
                                <FiLogOut className="h-5 w-5 mr-2" />
                                Logout
                            </button>
                        </div>
                    </div>
                </header>

                <main className="p-8 overflow-auto h-[calc(100vh-4rem)]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 transform transition-all hover:scale-105 hover:shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-600 text-sm font-semibold">{stat.title}</p>
                                        <p className="text-3xl font-bold text-green-900 mt-1">{stat.value}</p>
                                        <p className="text-green-600 text-sm mt-2">+{stat.change} this month</p>
                                    </div>
                                    <div className="text-green-700 bg-green-50 p-3 rounded-full">{stat.icon}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Charts with military theme */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h3 className="text-lg font-bold text-green-900 mb-4">Personnel Strength</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                    <XAxis dataKey="name" stroke="#374151" />
                                    <YAxis stroke="#374151" />
                                    <Tooltip />
                                    <Area
                                        type="monotone"
                                        dataKey="personnel"
                                        stroke="#065f46"
                                        fill="#065f46"
                                        fillOpacity={0.2}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                            <h3 className="text-lg font-bold text-green-900 mb-4">Operations & Medical Units</h3>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                    <XAxis dataKey="name" stroke="#374151" />
                                    <YAxis stroke="#374151" />
                                    <Tooltip />
                                    <Line
                                        type="monotone"
                                        dataKey="operations"
                                        stroke="#065f46"
                                        strokeWidth={2}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="medical"
                                        stroke="#0d9488"
                                        strokeWidth={2}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Recent Activity with military theme */}
                    <div className="bg-white rounded-lg border border-gray-200 p-6">
                        <h2 className="text-lg font-bold text-green-900 mb-4">Recent Activities</h2>
                        <div className="space-y-4">
                            {[
                                { title: 'New Personnel Assigned', time: '2 hours ago', icon: <FaUserShield /> },
                                { title: 'Operation Status Updated', time: '4 hours ago', icon: <FaClipboardList /> },
                                { title: 'Medical Supply Restocked', time: '6 hours ago', icon: <FaBriefcaseMedical /> },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center justify-between border-b border-gray-100 pb-4">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-700">
                                            {item.icon}
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                                            <p className="text-xs text-gray-500">{item.time}</p>
                                        </div>
                                    </div>
                                    <button className="text-sm text-green-700 hover:text-green-800 font-medium">
                                        View Details
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;