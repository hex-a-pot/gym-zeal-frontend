import TrainingHero from "../../Components/TrainingHero/TrainingHero";
import TrainingTile from "../../Components/TrainingTile/TrainingTile";
import "./about.css";
import React from "react";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">We offer something for everybody</h1>
      <div className="training-tiles">
        <TrainingTile
          type={"CrossFit Group Classes"}
          image={
            "https://images.pexels.com/photos/28080/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
          }
          to={"#crossfit"}
        />
        <TrainingTile
          type={"Strength Training"}
          image={
            "https://images.unsplash.com/photo-1592632789004-57d4354f2499?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHN0cmVuZ3RoJTIwdHJhaW5pbmd8ZW58MHx8MHx8fDA%3D"
          }
          to={"#strength"}
        />
        <TrainingTile
          type={"Personal Training"}
          image={
            "https://images.unsplash.com/photo-1532384816664-01b8b7238c8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHN0cmVuZ3RoJTIwdHJhaW5pbmd8ZW58MHx8MHx8fDA%3D"
          }
          to={"#personal-training"}
        />
        <TrainingTile
          type={"Member Only Events"}
          image={
            "https://images.pexels.com/photos/864939/pexels-photo-864939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          to={"#events"}
        />
      </div>
      <div id="crossfit">
        <TrainingHero
          title={"Get fit while having fun with our group CrossFit classes"}
          image={
            "https://images.unsplash.com/photo-1639511205270-2b1ce5b112c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNyb3NzZml0fGVufDB8fDB8fHww"
          }
          checklists={[
            "Just 30 minutes long",
            "Warm up & workout included",
            "Fun is guaranteed",
          ]}
          tag={"Group CrossFit Classes"}
        />
      </div>
      <div id="strength">
        <TrainingHero
          leftAligned
          title={
            "Crush any strength program with our suite of strength equipment"
          }
          image={
            "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          checklists={[
            "Fully fitted powerlifting and strongman section",
            "Olympic lifting platforms, weights and bars",
            "Dumbells ranging 2.5kgs - 30kgs",
          ]}
          tag={"Strength Training"}
        />
      </div>
      <div id="personal-training">
        <TrainingHero
          title={
            "Be guided every step of the way with one of our world class coaches"
          }
          image={
            "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          
          checklists={[
            "Weightloss",
            "Bodybuilding",
            "Powerlifting",
            "Nutrition planning"
          ]}
          tag={"Personal Training"}
        />
      </div>
      <div id="events">
        <TrainingHero
          leftAligned
          title={"Make new friends and get competitive with fun member events"}
          image={
            "https://images.unsplash.com/photo-1564282350350-a8355817fd2e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          checklists={[
            "Friendly competitions",
            "Monthly Challenges",
            "Summer potlucks and games",
          ]}
          tag={"Member Only Events"}
        />
      </div>
    </div>
  );
}

export default React.memo(About);
