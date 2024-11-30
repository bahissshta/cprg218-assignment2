document.getElementById("introduction_button").addEventListener("click", function() {
    document.getElementById("default").src = "images/img1.jpg";
    document.getElementById("title").textContent = "Introduction";
    document.getElementById("text").textContent = "Humans' fascination with space has been a driving force for exploration and innovation dating back to ancient civilizations. This website will explore in a very high-level fashion the major events during space exploration. I hope these bits of information will urge you to look further into the captivating world amongst the stars.";
});

document.getElementById("space_race_button").addEventListener("click", function() {
    document.getElementById("default").src = "images/img2.jpg";
    document.getElementById("title").textContent = "The Space Race";
    document.getElementById("text").textContent = "The Space Race was a key aspect of the Cold War rivalry between America and the Soviet Union for dominance in the space exploration field. Fueled namely by political tensions, technological advancements and national pride shaped this defining moment. The competition offically began in 1957 with the launch of Sputnik, prompting the US to establish NASA. The major milestones include Yuri Gagarin a Soviet cosmonaut becoming the first person to orbit the Earth in 1961 and Neil Armstrong's historic moon landing in 1969.";
});

document.getElementById("moon_landing_button").addEventListener("click", function() {
    document.getElementById("default").src = "images/img3.jpg";
    document.getElementById("title").textContent = "The Moon Landing";
    document.getElementById("text").textContent = "The moon landing, July 20, 1969, marked a historic achievement when Neil Armstrong and Buzz Aldrin became the first humans to set foot on the moon. This mission was a part of the Space Race as briefly discussed on the previous page. On July 16, 1969, Apollo 11 was launched with Neil Armstrong, Buzz Aldrin and Michael Collins aboard. While Armstrong and Aldrin took their steps on the moon, Collins actually remained onboard and in orbit. The crew returned on July 24, 1969. ";
});

document.getElementById("modern_day_button").addEventListener("click", function() {
    document.getElementById("default").src = "images/img4.jpg";
    document.getElementById("title").textContent = "Modern Day Exploration";
    document.getElementById("text").textContent = "SpaceX, fouded in 2001 by Elon Musk plays a pivotal role in modern day space exploration. Revolutionizing space travel with resuable rocket technology, satellite internet services and flying humans into space (not to explore, but to enjoy the view). Noble achievements include the succesful landing of the Falcon 9 in 2015 and the development of the Dragon 2 capsule for missions to the ISS.";
});
