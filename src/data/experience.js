const experience = [
  {
    role: 'Lead Vision & Robotics Engineer',
    company: 'Autonomo Labs',
    date: '2022 - Present',
    location: 'Bengaluru - Hybrid',
    points: [
      'Led end-to-end computer vision architecture for inline inspection, fusing cameras, depth, and calibration to feed ROS2 manipulators.',
      'Scaled YOLO + OCR + depth fusion on Jetson Orin, keeping cycle times under 200 ms while sustaining 3-5 pick-and-place ops per second.',
      'Built perception-driven agentic workflows so GPT planning loops react to live vision signals for humanoid execution.',
    ],
  },
  {
    role: 'Vision Systems Consultant',
    company: 'Shoonya Recycling',
    date: '2021 - 2022',
    location: 'Mumbai - On-site',
    points: [
      'Optimized TensorRT YOLO pipelines with MiDaS depth in ROS2, delivering sub-200 ms battery classification on production lines.',
      'Architected Docker and Azure IoT deployments to monitor edge vision performance across facilities.',
      'Cut vision false positives by 18% using OCR-informed post-processing, illumination modeling, and calibration audits.',
    ],
  },
  {
    role: 'Graduate Researcher',
    company: 'SVNIT Robotics Vision Lab',
    date: '2019 - 2021',
    location: 'Surat - India',
    points: [
      'Researched 6-DoF pose estimation at 90 FPS using RGB-D photometric alignment and transformer-based keypoints.',
      'Published on NeRF plus feature matching to reconstruct low-texture parts for downstream grasp planning.',
      'Mentored perception-first robotics teams to podium finishes at MindBend and IITB Micromouse.',
    ],
  },
  {
    role: 'Computer Vision Intern',
    company: 'XYZ Automation',
    date: 'Summer 2018',
    location: 'Pune - India',
    points: [
      'Prototyped line-tracking and depth-triggered navigation demos that informed the ROS stack for indoor logistics.',
      'Delivered Docker-based CI to validate perception updates against simulation regressions before robot rollout.',
    ],
  },
];

export default experience;
