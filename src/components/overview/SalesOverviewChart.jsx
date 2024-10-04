import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

// Updated data to represent student enrollments per month
const studentData = [
	{ name: "Jul", students: 120 },
	{ name: "Aug", students: 150 },
	{ name: "Sep", students: 180 },
	{ name: "Oct", students: 210 },
	{ name: "Nov", students: 230 },
	{ name: "Dec", students: 250 },
	{ name: "Jan", students: 270 },
	{ name: "Feb", students: 290 },
	{ name: "Mar", students: 320 },
	{ name: "Apr", students: 340 },
	{ name: "May", students: 360 },
	{ name: "Jun", students: 400 },
];

const SalesOverviewChart = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<h2 className='text-lg font-medium mb-4 text-gray-100'>Student Enrollment Overview</h2>

			<div className='h-80'>
				<ResponsiveContainer width={"100%"} height={"100%"}>
					<LineChart data={studentData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#4B5563' />
						<XAxis dataKey={"name"} stroke='#9ca3af' />
						<YAxis stroke='#9ca3af' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type='monotone'
							dataKey='students'
							stroke='#10B981'
							strokeWidth={3}
							dot={{ fill: "#10B981", strokeWidth: 2, r: 6 }}
							activeDot={{ r: 8, strokeWidth: 2 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default SalesOverviewChart;
