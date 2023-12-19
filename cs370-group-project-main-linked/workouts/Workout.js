document.addEventListener("DOMContentLoaded", function () {
    const slideInBar = document.getElementById("slide-in-bar");
    const videoContainer = document.getElementById("video-container");

    // Toggle slide-in bar visibility
    function toggleSlideInBar() {
      slideInBar.style.right = slideInBar.style.right === "0%" ? "-30%" : "0%";
    }

    // Populate workout options (replace with your own data)
    function populateWorkouts() {
      const workoutOptions = ["Warm-Up/Cooldown", "Cardio", "Strength", "Yoga", "HIIT", "Pilates", "Streching", "Kickboxing", "Kettlebell"];

      workoutOptions.forEach((workout) => {
        const option = document.createElement("div");
        option.textContent = workout;
        // Add click event listener to load videos based on selected workout
        option.addEventListener("click", () => loadVideos(workout));
        slideInBar.appendChild(option);
      });
    }

    // Load videos based on selected workout
    function loadVideos(workout) {
      const workoutVideos = videoURLs[workout];

      if (workoutVideos && workoutVideos.length > 0) {
        // Display the list of videos as buttons
        videoContainer.innerHTML = `<p>Available videos for ${workout}:</p>`;
        workoutVideos.forEach((videoData) => {
          const { videoURL, videoName } = videoData;
          const videoButton = document.createElement("button");
          videoButton.classList.add("video-button");
          videoButton.textContent = videoName;
          videoButton.addEventListener("click", () => playVideo(videoURL));
          videoContainer.appendChild(videoButton);
        });
      } else {
        videoContainer.innerHTML = `<p>No videos available for ${workout}.</p>`;
      }
    }

    // Function to play the selected video
    window.playVideo = function (videoURL) {
      videoContainer.innerHTML = `<iframe width="100%" height="100%" src="${videoURL}" frameborder="0" allowfullscreen></iframe>`;
    };

    // Initialize
    populateWorkouts();

    // Toggle slide-in bar on button click (you can replace this with your own trigger)
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Workouts";
    toggleButton.id = "toggleButton";
    toggleButton.addEventListener("click", toggleSlideInBar);
    document.body.appendChild(toggleButton);

    const videoURLs = {
      "Warm-Up/Cooldown": [
        { videoURL: "https://www.youtube.com/embed/sBXkZlQPC2U?si=cTnxQiPQT4Pet4NP", videoName: "Full Body Mobility for Healthy Movement" },
        { videoURL: "https://www.youtube.com/embed/zdXZDuVX0nU?si=YXVVkhJaGJEkXKlp", videoName: "Beginner-Friendly Cardio Warm Up" },
        { videoURL: "https://www.youtube.com/embed/V8QQ_bYgWUw?si=gCiFu-X4O8HIwH_E", videoName: "Restorative Bodyweight Workout" },
        { videoURL: "https://www.youtube.com/embed/JXIzvis8jmg?si=8yp9lxDqky9kZtf8", videoName: "Active Stretch Flow for Hips, Core, and Lower Body" },
        { videoURL: "https://www.youtube.com/embed/sF9C-wqtWzc?si=CU1uXIySLPBUBGi5", videoName: "Total Body Cardio Warm Up Workout to Wake up the Body and Mind" },
        { videoURL: "https://www.youtube.com/embed/Y5oUCerpt2Y?si=YccwA9VSmQlBJNtz", videoName: "Upper Body Warm Up" },
        { videoURL: "https://www.youtube.com/embed/b-G7zNSmrhk?si=9pXQrMp1zpguIPPy", videoName: "Feel Good Cardio Burst " },
        { videoURL: "https://www.youtube.com/embed/4ugy0hEQ268?si=nWlMxBkc2NzFs0EU", videoName: "Energy Boosting Cardio Jumpstart" },
      ],
      Cardio: [
        { videoURL: "https://www.youtube.com/embed/KfEOuV34WRc?si=sdXHv5Qrz9n04pQk", videoName: "Total Body Strength and Cardio" },
        { videoURL: "https://www.youtube.com/embed/NcpsxWE2Dqw?si=tyBKHq9IvrV-qNlW", videoName: "All Standing Total Body Tabata Cardio" },
        { videoURL: "https://www.youtube.com/embed/hOSiE_dmmdM?si=7U_TluYj6CKo-H2P", videoName: "Bored Easily HIIT and Cardio and Abs" },
        { videoURL: "https://www.youtube.com/embed/3xR8ZKVALwo?si=T0e59eAgC-8jrbxS", videoName: "Quick Cardio, Strength, and Core Combo for Total Body" },
        { videoURL: "https://www.youtube.com/embed/R58oVgVgRlc?si=fL-BomShH8Qnrbxz", videoName: "Full Body Strength and Cardio Workout" },
        { videoURL: "https://www.youtube.com/embed/cyJMcGt_938?si=Syg0bKyg3T8HdgL6", videoName: "Seated Strength and Cardio" },
        { videoURL: "https://www.youtube.com/embed/nBBhpDprTqs?si=WFZQNSAiUdTmI8om", videoName: "Low Impact Cardio and Core" },
        { videoURL: "https://www.youtube.com/embed/d8QcqQA0zIQ?si=3mqLOgcYdzSuXnq4", videoName: "Cardio, Strength, and Core Combo" },
      ],
      Strength: [
        { videoURL: "https://www.youtube.com/embed/yaiGFYw_1rw?si=Xlfxi1nfpyJzunuK", videoName: "30-Minute Bodyweight Core Workout" },
        { videoURL: "https://www.youtube.com/embed/glydyExmKxo?si=0lLC9p5HcBUeL-mp", videoName: "Total Body AMRAP Strength Circuits" },
        { videoURL: "https://www.youtube.com/embed/WkIXCl8es80?si=ERyi-90f0r4jku1O", videoName: "No Cardio Upper Body Strength" },
        { videoURL: "https://www.youtube.com/embed/IoSucrcM_GU?si=rMpb0PWSXYNJ3eOx", videoName: "Upper Body Workout for Arms, Shoulder and Back" },
        { videoURL: "https://www.youtube.com/embed/XC6SMeU4GoU?si=7YTRsYCB-piPj9rv", videoName: "Upper Body Push-Pull Strength" },
        { videoURL: "https://www.youtube.com/embed/KfEOuV34WRc?si=sdXHv5Qrz9n04pQk", videoName: "Total Body Strength and Cardio" },
        { videoURL: "https://www.youtube.com/embed/b-i4N6cVzec?si=ylepNRbMBIJhMc6z", videoName: "No Equipment Total Body Strength Circuit" },
        { videoURL: "https://www.youtube.com/embed/YuzbgJsI7r0?si=7MkABXilUJpHJtxE", videoName: "Lower Body Pure Strength Supersets" },
      ],
      Yoga: [
        { videoURL: "https://www.youtube.com/embed/rUnB1rtasaw?si=Nage7T6JYpg8glji", videoName: "Core-Focused Vinyasa Yoga" },
        { videoURL: "https://www.youtube.com/embed/EIc9CtIlS_o?si=vwnLFJ1mK52OUoVx", videoName: "Energizing Upper Body Yoga Flow" },
        { videoURL: "https://www.youtube.com/embed/w5y3Zl1F5Vs?si=pvZZIY193oG740m2", videoName: "Total Body Morning Yoga1" },
        { videoURL: "https://www.youtube.com/embed/mH_Df7bZ62U?si=FnarR2SehnFiiaVA", videoName: "Gentle Yoga Extended Desk-Break Flow" },
        { videoURL: "https://www.youtube.com/embed/KqcjO7R7MaI?si=BhDuH1HJ-LLBReSB", videoName: "Gentle Yoga: Total Body Restorative Flow" },
        { videoURL: "https://www.youtube.com/embed/Af-VOp7yrxg?si=-JX-DBKXJIh8LYcl", videoName: "Quick Total Body Power Yoga" },
        { videoURL: "https://www.youtube.com/embed/hTDLUpBsXGw?si=Ib2gxMNjk7GUX6Gf", videoName: "Fitness Blender 5-Day Challenge Day 6: Yang/Yin Yoga Flow: Active Recovery for Mindful Strength-Building" },
      ],
      HIIT: [
        { videoURL: "https://www.youtube.com/embed/NcpsxWE2Dqw?si=tyBKHq9IvrV-qNlW", videoName: "All Standing Total Body Tabata Cardio" },
        { videoURL: "https://www.youtube.com/embed/w-54A0Qkxg8?si=gR80EZFwrnZQzOAf", videoName: "Lower Body HIIT and Strength Circuits" },
        { videoURL: "https://www.youtube.com/embed/9OG1Evg_0PY?si=L2gOSswRFsjqX4V-", videoName: "Bored Easily HIIT" },
        { videoURL: "https://www.youtube.com/embed/KetzrKJt3NA?si=Itr-j4Cw2QwYA4CW", videoName: "Lower Body Strength With HIIT Finisher" },
        { videoURL: "https://www.youtube.com/embed/q0EXdgPkUL8?si=V-agDPXN9VY1Mg9p", videoName: "Quick Bodyweight HIIT with Active Recovery Intervals" },
        { videoURL: "https://www.youtube.com/embed/wa1qgY8CaHA?si=M2xu_MMhUJ57GNXZ", videoName: "Bodyweight Strength with HIIT Burnout Sets - Total Body Workout in 30 Minutes" },
        { videoURL: "https://www.youtube.com/embed/40cpTm90U7E?si=vh8bRPhT61xuH7aE", videoName: "45 Minute HIIT and Abs Home Workout - No Equipment Remix Cardio and Core" },
        { videoURL: "https://www.youtube.com/embed/hOSiE_dmmdM?si=7U_TluYj6CKo-H2P", videoName: "Bored Easily HIIT Cardio and Abs" },
      ],
      Pilates: [
        { videoURL: "https://www.youtube.com/embed/ilZ0ScD4rsU?si=vRH16WNX9HtTq-HO", videoName: "10 Minute Abs, Butt and Thigh Workout - Pilates Burnout" },
        { videoURL: "https://www.youtube.com/embed/jBBE6kQ2hVk?si=kyP8CfLxWmb8ViCZ", videoName: "Pilates Flow - Lower Body Pilates Workout" },
        { videoURL: "https://www.youtube.com/embed/wuW27uhsPMs?si=bJDFOGvvE9lrD1ls", videoName: "Lower Body Pilates with Resistance Band" },
        { videoURL: "https://www.youtube.com/embed/WbxSsncvuVE?si=8Ox5UqKdPROCxN-d", videoName: "Ascending Rep Pilates Butt and Thigh Workout for Glute Activation - Mat Pilates Flow" },
        { videoURL: "https://www.youtube.com/embed/JnXMbE9tHlw?si=fGiw-ZT6wIRiFdRA", videoName: "Easy Pilates and Cardio Workout with Relaxing Cool Down — Active Recovery Workout" },
        { videoURL: "https://www.youtube.com/embed/E8AFhOuZ3JU?si=H9W6w7l_1ImBsrlA", videoName: "Glute Activation Workout - Knee Friendly Butt and Thigh Workout" },
      ],
      Streching: [
        { videoURL: "https://www.youtube.com/embed/JXIzvis8jmg?si=55ucPwigGZBejxG0", videoName: "Active Stretch Flow for Hips, Core, and Lower Body" },
        { videoURL: "https://www.youtube.com/embed/XFByXRS5TbM?si=Q9b8SLM80oKC2CYE", videoName: "Mat Stretches for Stiff Hips" },
        { videoURL: "https://www.youtube.com/embed/FFHwoIQmFEA?si=Xi18ep0K-FgjIQDh", videoName: "Relaxing Stretching Workout - Feel Good Stretches for Stress Relief" },
        { videoURL: "https://www.youtube.com/embed/PDqyBM7Hqs0?si=DL5v3S-MZE1WduH-", videoName: "Lower Body Active Stretch Routine - PNF Stretch Routine for the Lower Body" },
      ],
      Kickboxing: [
        { videoURL: "https://www.youtube.com/embed/XwfTTbEbwng?si=2qJ9E0WdF5i9KEQX", videoName: "HIIT and Kickboxing Cardio Plus Abs - Home Cardio and Abs Workout" },
        { videoURL: "https://www.youtube.com/embed/3wzNodXXANY?si=GTP6JNAkIRt4Xoup", videoName: "30 Minute Cardio Kickboxing and Abs Home Workout" },
        { videoURL: "https://www.youtube.com/embed/FR1BtM2CpRg?si=Y17rDN2cOaDQ6gRp", videoName: "Cardio Kickboxing and Lower Body Strength Workout" },
        { videoURL: "https://www.youtube.com/embed/UAUdgU83Vx8?si=NP5OH96SN-DgjVXe", videoName: "Intense HIIT Cardio Kickboxing and Upper Body Strength Workout" },
        { videoURL: "https://www.youtube.com/embed/HY3Q7lBeb_M?si=cHdwL_FgHE9YnMFM", videoName: "Cardio Kickboxing and Bodyweight Cardio Workout - Fat Burning Intervals" },
        { videoURL: "https://www.youtube.com/embed/PSBGp79toaQ?si=U88P5QhiItd-KzFI", videoName: "Cardio Kickboxing and Abs Workout - Kickboxing for Stress and Cardio Benefits" },
        { videoURL: "https://www.youtube.com/embed/-dthjOzzS84?si=yYTjX3nhXDG55JyJ", videoName: "HIIT Cardio Kickboxing plus Core Workout - 33 Minute Cardio and Abs Workou" },
      ],
      Kettlebell: [
      ],
    };
  });