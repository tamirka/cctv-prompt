import type { GeneratorOptions, SavedPrompt } from '../types';

// Mock data to be used as a placeholder for the gallery.
const MOCK_PROMPTS: SavedPrompt[] = [
    {
        id: 1,
        created_at: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
        prompt: "CCTV footage from a high corner of a quiet library reading room. A person is deeply engrossed in a book, while another person in the background subtly tries to peek at the book's cover. The timestamp reads LIB_CAM_03 - 2024-07-21 14:30:15. The video has slight lens distortion and is grainy.",
        options: {
            scene: "A person peeks at another's book in a library.",
            location: "Office Space (After Hours)",
            timeOfDay: "Afternoon (3 PM)",
            effects: ["Slightly Grainy", "Lens Distortion (Fisheye)"],
        },
    },
    {
        id: 2,
        created_at: new Date(Date.now() - 1000 * 60 * 15).toISOString(),
        prompt: "Infrared footage from a home living room camera late at night. The family cat suddenly bolts across the room, chasing something unseen. Timestamp shows 2024-07-21 03:12:45. Heavy compression artifacts are visible.",
        options: {
            scene: "A cat chases something unseen at night.",
            location: "Home Living Room",
            timeOfDay: "Late Night (2 AM)",
            effects: ["Infrared / Night Vision", "Heavy Compression Artifacts"],
        },
    },
    {
        id: 3,
        created_at: new Date(Date.now() - 1000 * 60 * 35).toISOString(),
        prompt: "Static from a camera mounted on a gas station pump. A person struggles comically to open their gas cap for a full minute before realizing it's on the other side of the car. Timestamp: GAS_PUMP_07 - 2024-07-21 10:05:22. There's dust on the lens.",
        options: {
            scene: "A person struggles to find their gas cap.",
            location: "Gas Station Pump",
            timeOfDay: "Daytime (Noon)",
            effects: ["Dust on Lens"],
        },
    },
    {
        id: 4,
        created_at: new Date(Date.now() - 1000 * 60 * 65).toISOString(),
        prompt: "A shaky camera inside an old elevator shows two strangers standing in awkward silence. One of them drops their keys, leading to a clumsy exchange. The lights flicker briefly. Timestamp: ELEVATOR_B - 2024-07-21 18:55:01.",
        options: {
            scene: "Two strangers in an awkward elevator ride.",
            location: "Elevator",
            timeOfDay: "Evening (7 PM)",
            effects: ["Flickering Lights", "Occasional Frame Skips"],
        },
    },
    {
        id: 5,
        created_at: new Date(Date.now() - 1000 * 60 * 125).toISOString(),
        prompt: "Wide-angle view of a deserted parking garage. A single shopping cart slowly rolls into frame, seemingly pushed by the wind, and gently bumps into a concrete pillar. Timestamp: P-GARAGE_L3_C2 - 2024-07-21 00:45:10. The footage is monochrome and has a low frame rate.",
        options: {
            scene: "A lone shopping cart rolls across a parking garage.",
            location: "Parking Garage",
            timeOfDay: "Late Night (2 AM)",
            effects: ["Infrared / Night Vision", "Occasional Frame Skips"],
        },
    },
    {
        id: 6,
        created_at: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
        prompt: "A camera mounted above the entrance of a convenience store captures a delivery person dropping a stack of newspapers. They hastily try to pick them all up as a bus passes by. Timestamp: STORE_FRONT - 2024-07-21 05:15:30. The image is slightly blurry.",
        options: {
            scene: "A delivery person drops a stack of newspapers.",
            location: "Convenience Store",
            timeOfDay: "Dawn (5 AM)",
            effects: ["Slightly Grainy"],
        },
    },
    {
        id: 7,
        created_at: new Date(Date.now() - 1000 * 60 * 240).toISOString(),
        prompt: "Office camera shows a cleaning crew member discovering a forgotten birthday cake in the breakroom. They hesitate, then cut a tiny slice for themself. Timestamp: OFFICE_KITCHEN - 2024-07-20 22:00:55. A static glitch appears as they take a bite.",
        options: {
            scene: "A cleaner finds and eats a forgotten birthday cake.",
            location: "Office Space (After Hours)",
            timeOfDay: "Late Night (2 AM)",
            effects: ["Static Glitch"],
        },
    },
    {
        id: 8,
        created_at: new Date(Date.now() - 1000 * 60 * 300).toISOString(),
        prompt: "View from an apartment hallway camera. A resident is trying to quietly sneak out but their dog runs out the door. A low-speed chase ensues down the hall. Timestamp: APT_HALL_3F - 2024-07-20 23:30:18. Heavy compression artifacts are visible.",
        options: {
            scene: "A resident's dog escapes into the hallway.",
            location: "Apartment Hallway",
            timeOfDay: "Late Night (2 AM)",
            effects: ["Heavy Compression Artifacts"],
        },
    },
];


/**
 * Placeholder function to add a prompt. It logs the action to the console.
 * @param prompt - The generated prompt text.
 * @param options - The options used to generate the prompt.
 */
export const addPrompt = async (prompt: string, options: GeneratorOptions): Promise<void> => {
  console.log('PLACEHOLDER: Simulating adding prompt to gallery...', { prompt, options });
  // In a real implementation, this would save to a database.
  // For this placeholder, we do nothing, just resolve to simulate success.
  return Promise.resolve();
};

/**
 * Placeholder function that fetches mock prompts for the gallery.
 * @returns A promise that resolves to an array of saved prompts.
 */
export const getRecentPrompts = async (): Promise<SavedPrompt[]> => {
  console.log('PLACEHOLDER: Fetching mock prompts for gallery.');
  // Simulate a network delay for realism
  await new Promise(resolve => setTimeout(resolve, 500));
  return MOCK_PROMPTS;
};