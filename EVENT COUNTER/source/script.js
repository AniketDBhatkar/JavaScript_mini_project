// Array of 10 events with names and images
const stages = [
  { name: "Opening Ceremony",    img: "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg" },
  { name: "Keynote Speech",      img: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg" },
  { name: "AI Workshop",         img: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg" },
  { name: "Robotics Demo",       img: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg" },
  { name: "Hackathon Kickoff",   img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg" },
  { name: "Networking Lunch",    img: "https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg" },
  { name: "Startup Pitches",     img: "https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg" },
  { name: "Entertainment Night", img: "https://images.pexels.com/photos/1449791/pexels-photo-1449791.jpeg" },
  { name: "Award Ceremony",      img: "https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg" },
  { name: "Closing Remarks",     img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" }
];

let currentStage = 0;
let stageEndTime;

// Start a stage
function startStage(index) {
  const now = Date.now();
  const durationMs = 30 * 1000; // 30 seconds for every event
  stageEndTime = now + durationMs;

  document.getElementById("stageName").innerHTML = "Current: " + stages[index].name;
  document.getElementById("stageImage").src = stages[index].img;
}

// Update countdown every second
function updateCountdown() {
  const now = Date.now();
  const distance = stageEndTime - now;

  if (distance <= 0) {
    // move to next stage
    currentStage++;
    if (currentStage < stages.length) {
      startStage(currentStage);
    } else {
      // all done
      document.getElementById("countdown").innerHTML = "🎉 Event Finished!";
      document.getElementById("stageName").innerHTML = "All Stages Completed";
      document.getElementById("stageImage").src = "";
      clearInterval(timer);
    }
    return;
  }

  // calculate mm:ss
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const minutes = Math.floor(distance / (1000 * 60));

  document.getElementById("countdown").innerHTML =
    minutes + "m : " + seconds + "s"; 
}

// Initialize
startStage(currentStage);
const timer = setInterval(updateCountdown, 1000);
