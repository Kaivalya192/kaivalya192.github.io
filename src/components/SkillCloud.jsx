const skillGroups = [
  {
    title: 'Robotics & Control',
    items: ['ROS2', 'MoveIt', 'Nav2', 'URDF', 'CANOpen', 'Modbus', 'Gazebo'],
  },
  {
    title: 'Perception & AI',
    items: ['YOLOv8', 'TensorRT', 'LangGraph', 'OpenCV', 'ONNX', 'RealSense', 'LoFTR'],
  },
  {
    title: 'Edge & Infrastructure',
    items: ['NVIDIA Jetson', 'Docker', 'gRPC', 'MQTT', 'Azure IoT', 'Linux RT'],
  },
  {
    title: 'Languages & Tools',
    items: ['Python', 'C++', 'TypeScript', 'FastAPI', 'Vite', 'TailwindCSS', 'Framer Motion'],
  },
];

function SkillCloud() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {skillGroups.map((group) => (
        <div
          key={group.title}
          className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.35)]"
        >
          <h3 className="text-lg font-semibold text-slate-100">{group.title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan-500/30 bg-slate-900/80 px-3 py-1 text-xs font-medium text-cyan-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillCloud;
