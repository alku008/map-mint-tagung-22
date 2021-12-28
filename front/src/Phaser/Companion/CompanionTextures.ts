export interface CompanionResourceDescriptionInterface {
    name: string;
    img: string;
    behaviour: "dog" | "cat";
}

export const COMPANION_RESOURCES: CompanionResourceDescriptionInterface[] = [
    { name: "dog1", img: "resources/characters/pipoya/Dog 01-1.png", behaviour: "dog" },
    { name: "dog2", img: "resources/characters/pipoya/Dog 01-2.png", behaviour: "dog" },
    { name: "dog3", img: "resources/characters/pipoya/Dog 01-3.png", behaviour: "dog" },
    { name: "cat1", img: "resources/characters/pipoya/Cat 01-1.png", behaviour: "cat" },
    { name: "cat2", img: "resources/characters/pipoya/Cat 01-2.png", behaviour: "cat" },
    { name: "cat3", img: "resources/characters/pipoya/Cat 01-3.png", behaviour: "cat" },
    { name: "Drone", img: "resources/companions/Drone.png", behaviour: "cat" },
    { name: "Penguin", img: "resources/companions/Penguin.png", behaviour: "cat" },
    { name: "RobotVacuum", img: "resources/companions/RobotVacuum.png", behaviour: "cat" },
    { name: "Roomba", img: "resources/companions/Roomba.png", behaviour: "cat" },
    { name: "ClaymoreRoomba", img: "resources/companions/Claymore_Roomba.png", behaviour: "cat" },
    { name: "Smiley", img: "resources/companions/Smiley.png", behaviour: "cat" },
    { name: "blauhai", img: "resources/companions/blauhai3.png", behaviour: "cat" },
];
