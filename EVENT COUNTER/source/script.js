

// Array 1
const stages1 = [
  { name: "Opening Ceremony",    img: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg" },
  { name: "Keynote Speech",      img: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg" },
  { name: "AI Workshop",         img: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg" },
  { name: "Robotics Demo",       img: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg" },
  { name: "Hackathon Kickoff",   img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg" },
  { name: "Networking Lunch",    img: "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg" }
];

// Array 2
const stages2 = [
  { name: "Startup Pitches",     img: "https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg" },
  { name: "Panel Discussion",    img: "https://images.pexels.com/photos/1181399/pexels-photo-1181399.jpeg" },
  { name: "Tech Quiz",           img: "https://images.pexels.com/photos/4145353/pexels-photo-4145353.jpeg" },
  { name: "Coding Contest",      img: "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg" },
  { name: "AR/VR Showcase",      img: "https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg" },
  { name: "Cybersecurity Talk",  img: "https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg" }
];

// Array 3
const stages3 = [
  { name: "Entertainment Night", img: "https://images.pexels.com/photos/1449791/pexels-photo-1449791.jpeg" },
  { name: "Cultural Dance",      img: "https://images.pexels.com/photos/1699166/pexels-photo-1699168.jpeg" },
  { name: "Music Concert",       img: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg" },
  { name: "Stand-up Comedy",     img: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg" },
  { name: "Award Ceremony",      img: "https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg" },
  { name: "Closing Remarks",     img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" }
];

// ========== LOGIC ==========
let trackers = {};

function startStages(stageArray, id) {
  trackers[id] = {
    index: 0,
    endTime: Date.now() + 15 * 1000, // 15 sec event
    timer: null,
  };

  updateStage(stageArray, id);
  trackers[id].timer = setInterval(() => updateCountdown(stageArray, id), 1000);
}

function updateStage(stageArray, id) {
  const stage = stageArray[trackers[id].index];
  document.getElementById(`stageName${id}`).innerHTML = "Current: " + stage.name;
  document.getElementById(`stageImage${id}`).src = stage.img;
}

function updateCountdown(stageArray, id) {
  const now = Date.now();
  const distance = trackers[id].endTime - now;

  if (distance <= 0) {
    trackers[id].index++;
    if (trackers[id].index < stageArray.length) {
      trackers[id].endTime = now + 15 * 1000;
      updateStage(stageArray, id);
    } else {
      clearInterval(trackers[id].timer);
      document.getElementById(`countdown${id}`).innerHTML = "Finished!";
      document.getElementById(`stageName${id}`).innerHTML = "All Events Done";
      document.getElementById(`stageImage${id}`).src = "";
    }
    return;
  }

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const minutes = Math.floor(distance / (1000 * 60));
  document.getElementById(`countdown${id}`).innerHTML =
    minutes + "m : " + seconds + "s";
}

// Auto-start all events 
window.onload = function () {
  startStages(stages1, 1);
  startStages(stages2, 2);
  startStages(stages3, 3);
};
