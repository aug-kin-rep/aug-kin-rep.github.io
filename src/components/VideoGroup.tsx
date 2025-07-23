import React from 'react';

// Trajectory video imports
import floorplan15_trajectory from "/traj-videos/ithor_floorplan15_1_11622_fix_local_rgb_31_trajectory.mp4";
import floorplan2_trajectory from "/traj-videos/ithor_floorplan2_1_101773_0_0000_fix_local_rgb_25_trajectory.mp4";
import floorplan8_summit_trajectory from "/traj-videos/ithor_floorplan8_1_summit_franka_46889_0_fix_local_rgb_0_trajectory.mp4";
import floorplan9_r1_trajectory from "/traj-videos/embodiment/ithor_floorplan9_1_r1_45850_0_fix_local_rgb_0_trajectory.mp4";
import floorplan9_summit_trajectory from "/traj-videos/embodiment/ithor_floorplan9_1_summit_franka_45850_0_fix_local_rgb_3_trajectory.mp4";
import floorplan9_tiago_trajectory from "/traj-videos/embodiment/ithor_floorplan9_1_tiago_45850_0_fix_local_rgb_0_trajectory.mp4";
import floorplan14_trajectory from "/traj-videos/ithor_floorplan14_1_101773_0_0001_fix_local_rgb_25_trajectory.mp4";
import grasp_switch_trajectory from "/traj-videos/grasp_switch_ithor_floorplan1_1_101773_fix_local_rgb_24_trajectory.mp4";
import feishu_video1 from "/traj-videos/飞书20250722-172859.mp4";
import floorplan8_7310 from "/traj-videos/ithor_floorplan8_1_summit_franka_7310_0_fix_local_rgb_1_trajectory.mp4"

interface VideoItem {
  id: string;
  src: string;
  caption: string;
}

interface VideoGroupProps {
  videos: VideoItem[];
}

// Export videoData for use in other files
export const videoData: VideoItem[] = [
  {
    id: "floorplan9_summit_trajectory",
    src: floorplan9_summit_trajectory,
    caption: "Floorplan 9 Summit Franka Trajectory"
  },
  {
    id: "floorplan9_r1_trajectory",
    src: floorplan9_r1_trajectory,
    caption: "Floorplan 9 R1 Trajectory"
  },
  {
    id: "floorplan9_tiago_trajectory",
    src: floorplan9_tiago_trajectory,
    caption: "Floorplan 9 Tiago Trajectory"
  },
  {
    id: "floorplan2_trajectory",
    src: floorplan2_trajectory,
    caption: "Floorplan 2 Trajectory"
  },
  {
    id: "floorplan8_summit_trajectory",
    src: floorplan8_summit_trajectory,
    caption: "Floorplan 8 Summit Franka Trajectory"
  },
 {
    id: "floorplan15_trajectory",
    src: floorplan15_trajectory,
    caption: "Floorplan 15 Summit Franka Trajectory"
  },
  
  {
    id: "grasp_switch_trajectory",
    src: grasp_switch_trajectory,
    caption: "Grasp Switch Trajectory"
  },
  {
    id: "feishu_video1",
    src: feishu_video1,
    caption: "Demo Video 1"
  },
  {
    id: "floorplan8_7310",
    src: floorplan8_7310,
    caption: "Floorplan 8 7310 Trajectory"
  },
];

export default function VideoGroup({ videos }: VideoGroupProps) {
  return (
    <section className="hero is-light is-small">
      <div className="container is-max-desktop has-text-centered">
        <div className="hero-body">
          <div className="video-group">
            {videos.map((video) => (
              <figure key={video.id}>
                <video id={video.id} autoPlay muted loop playsInline>
                  <source src={video.src} type="video/mp4" />
                </video>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
