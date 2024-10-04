import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { motion } from "framer-motion";

const scholarshipActivityData = [
	{ name: "Mon", "0-4": 10, "4-8": 25, "8-12": 45, "12-16": 60, "16-20": 80, "20-24": 20 },
	{ name: "Tue", "0-4": 15, "4-8": 30, "8-12": 50, "12-16": 70, "16-20": 90, "20-24": 30 },
	{ name: "Wed", "0-4": 20, "4-8": 40, "8-12": 60, "12-16": 80, "16-20": 100, "20-24": 40 },
	{ name: "Thu", "0-4": 25, "4-8": 50, "8-12": 70, "12-16": 90, "16-20": 110, "20-24": 50 },
	{ name: "Fri", "0-4": 30, "4-8": 60, "8-12": 80, "12-16": 100, "16-20": 120, "20-24": 60 },
	{ name: "Sat", "0-4": 35, "4-8": 70, "8-12": 90, "12-16": 110, "16-20": 130, "20-24": 70 },
	{ name: "Sun", "0-4": 40, "4-8": 80, "8-12": 100, "12-16": 120, "16-20": 140, "20-24": 80 },
];

const UserActivityHeatmap = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>PMSSS Activity Heatmap</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
				<BarChart data={scholarshipActivityData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='name' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Legend />
						<Bar dataKey='0-4' stackId='a' fill='#6366F1' />
						<Bar dataKey='4-8' stackId='a' fill='#8B5CF6' />
						<Bar dataKey='8-12' stackId='a' fill='#EC4899' />
						<Bar dataKey='12-16' stackId='a' fill='#10B981' />
						<Bar dataKey='16-20' stackId='a' fill='#F59E0B' />
						<Bar dataKey='20-24' stackId='a' fill='#3B82F6' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default UserActivityHeatmap;

