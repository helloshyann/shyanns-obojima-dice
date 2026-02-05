Hooks.once("diceSoNiceReady", (dice3d) => {
	dice3d.addTexture("tall-grass-texture", {
		name: "★ Obojima Tall Grass Texture",
		composite: "multiply",
		source:
			"modules/shyanns-obojima-dice/assets/textures/tall-grass-texture.png",
	});
	dice3d.addTexture("parking-texture", {
		name: "★ Obojima Parking Texture",
		composite: "multiply",
		source: "modules/shyanns-obojima-dice/assets/textures/parking-texture.png",
	});
	dice3d.addTexture("flying-whale-texture", {
		name: "★ Obojima Whale Texture",
		composite: "multiply",
		source:
			"modules/shyanns-obojima-dice/assets/textures/flying-whale-texture.png",
	});
	dice3d.addTexture("arbora-texture", {
		name: "★ Obojima Mt. Arbora Texture",
		composite: "multiply",
		source: "modules/shyanns-obojima-dice/assets/textures/arbora-texture.png",
	});
	dice3d.addTexture("underwater-texture", {
		name: "★ Obojima Underwater Texture",
		composite: "multiply",
		source:
			"modules/shyanns-obojima-dice/assets/textures/underwater-texture.png",
	});
	///

	dice3d.addSystem(
		{ id: "tall-grass", name: "★ Obojima Dice: Tall Grass" },
		false,
	);

	dice3d.addDicePreset({
		type: "d2",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d2/d2-1.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d2/d2-2.png",
		],
		system: "tall-grass",
	});

	dice3d.addDicePreset({
		type: "d4",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d4/d4-1.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d4/d4-2.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d4/d4-3.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d4/d4-4.png",
		],
		system: "tall-grass",
	});

	dice3d.addDicePreset({
		type: "d6",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d6/d6-1.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d6/d6-2.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d6/d6-3.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d6/d6-4.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d6/d6-5.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d6/d6-6.png",
		],
		system: "tall-grass",
	});

	dice3d.addDicePreset({
		type: "d8",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d8/d8-1.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d8/d8-2.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d8/d8-3.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d8/d8-4.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d8/d8-5.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d8/d8-6.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d8/d8-7.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d8/d8-8.png",
		],
		system: "tall-grass",
	});

	dice3d.addDicePreset({
		type: "d10",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d10/d10-1.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d10/d10-2.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d10/d10-3.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d10/d10-4.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d10/d10-5.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d10/d10-6.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d10/d10-7.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d10/d10-8.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d10/d10-9.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d10/d10-0.png",
		],
		system: "tall-grass",
	});

	dice3d.addDicePreset({
		type: "d12",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d12/d12-1.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d12/d12-2.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d12/d12-3.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d12/d12-4.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d12/d12-5.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d12/d12-6.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d12/d12-7.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d12/d12-8.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d12/d12-9.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d12/d12-10.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d12/d12-11.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d12/d12-12.png",
		],
		system: "tall-grass",
	});

	dice3d.addDicePreset({
		type: "d100",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d100/d100-10.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d100/d100-20.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d100/d100-30.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d100/d100-40.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d100/d100-50.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d100/d100-60.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d100/d100-70.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d100/d100-80.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d100/d100-90.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d100/d100-100.png",
		],
		system: "tall-grass",
	});

	dice3d.addDicePreset({
		type: "d20",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-1.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-2.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-3.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-4.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-5.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-6.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-7.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-8.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-9.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-10.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-11.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-12.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-13.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-14.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-15.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-16.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-17.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-18.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-19.png",
			"modules/shyanns-obojima-dice/assets/faces/tall-grass/d20/d20-20.png",
		],
		system: "tall-grass",
	});

	///

	dice3d.addSystem(
		{ id: "abandoned-parking", name: "★ Obojima Dice: Abandoned Parking" },
		false,
	);

	dice3d.addDicePreset({
		type: "d2",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d2/d2-1.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d2/d2-2.png",
		],
		system: "abandoned-parking",
	});

	dice3d.addDicePreset({
		type: "d4",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d4/d4-1.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d4/d4-2.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d4/d4-3.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d4/d4-4.png",
		],
		system: "abandoned-parking",
	});

	dice3d.addDicePreset({
		type: "d6",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d6/d6-1.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d6/d6-2.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d6/d6-3.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d6/d6-4.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d6/d6-5.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d6/d6-6.png",
		],
		system: "abandoned-parking",
	});

	dice3d.addDicePreset({
		type: "d8",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d8/d8-1.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d8/d8-2.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d8/d8-3.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d8/d8-4.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d8/d8-5.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d8/d8-6.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d8/d8-7.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d8/d8-8.png",
		],
		system: "abandoned-parking",
	});

	dice3d.addDicePreset({
		type: "d10",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d10/d10-1.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d10/d10-2.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d10/d10-3.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d10/d10-4.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d10/d10-5.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d10/d10-6.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d10/d10-7.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d10/d10-8.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d10/d10-9.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d10/d10-0.png",
		],
		system: "abandoned-parking",
	});

	dice3d.addDicePreset({
		type: "d12",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d12/d12-1.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d12/d12-2.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d12/d12-3.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d12/d12-4.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d12/d12-5.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d12/d12-6.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d12/d12-7.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d12/d12-8.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d12/d12-9.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d12/d12-10.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d12/d12-11.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d12/d12-12.png",
		],
		system: "abandoned-parking",
	});

	dice3d.addDicePreset({
		type: "d100",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d100/d100-10.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d100/d100-20.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d100/d100-30.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d100/d100-40.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d100/d100-50.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d100/d100-60.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d100/d100-70.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d100/d100-80.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d100/d100-90.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d100/d100-100.png",
		],
		system: "abandoned-parking",
	});

	dice3d.addDicePreset({
		type: "d20",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-1.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-2.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-3.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-4.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-5.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-6.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-7.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-8.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-9.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-10.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-11.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-12.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-13.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-14.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-15.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-16.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-17.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-18.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-19.png",
			"modules/shyanns-obojima-dice/assets/faces/abandoned-parking/d20/d20-20.png",
		],
		system: "abandoned-parking",
	});

	///

	dice3d.addSystem(
		{ id: "flying-whales", name: "★ Obojima Dice: Flying Whales" },
		false,
	);

	dice3d.addDicePreset({
		type: "d2",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d2/d2-1.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d2/d2-2.png",
		],
		system: "flying-whales",
	});

	dice3d.addDicePreset({
		type: "d4",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d4/d4-1.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d4/d4-2.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d4/d4-3.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d4/d4-4.png",
		],
		system: "flying-whales",
	});

	dice3d.addDicePreset({
		type: "d6",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d6/d6-1.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d6/d6-2.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d6/d6-3.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d6/d6-4.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d6/d6-5.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d6/d6-6.png",
		],
		system: "flying-whales",
	});

	dice3d.addDicePreset({
		type: "d8",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d8/d8-1.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d8/d8-2.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d8/d8-3.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d8/d8-4.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d8/d8-5.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d8/d8-6.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d8/d8-7.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d8/d8-8.png",
		],
		system: "flying-whales",
	});

	dice3d.addDicePreset({
		type: "d10",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d10/d10-1.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d10/d10-2.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d10/d10-3.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d10/d10-4.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d10/d10-5.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d10/d10-6.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d10/d10-7.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d10/d10-8.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d10/d10-9.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d10/d10-0.png",
		],
		system: "flying-whales",
	});

	dice3d.addDicePreset({
		type: "d12",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d12/d12-1.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d12/d12-2.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d12/d12-3.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d12/d12-4.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d12/d12-5.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d12/d12-6.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d12/d12-7.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d12/d12-8.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d12/d12-9.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d12/d12-10.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d12/d12-11.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d12/d12-12.png",
		],
		system: "flying-whales",
	});

	dice3d.addDicePreset({
		type: "d100",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d100/d100-10.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d100/d100-20.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d100/d100-30.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d100/d100-40.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d100/d100-50.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d100/d100-60.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d100/d100-70.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d100/d100-80.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d100/d100-90.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d100/d100-100.png",
		],
		system: "flying-whales",
	});

	dice3d.addDicePreset({
		type: "d20",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-1.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-2.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-3.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-4.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-5.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-6.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-7.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-8.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-9.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-10.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-11.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-12.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-13.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-14.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-15.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-16.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-17.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-18.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-19.png",
			"modules/shyanns-obojima-dice/assets/faces/flying-whales/d20/d20-20.png",
		],
		system: "flying-whales",
	});

	///

	dice3d.addSystem(
		{ id: "mt-arbora", name: "★ Obojima Dice: Mt. Arbora" },
		false,
	);

	dice3d.addDicePreset({
		type: "d2",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d2/d2-1.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d2/d2-2.png",
		],
		system: "mt-arbora",
	});

	dice3d.addDicePreset({
		type: "d4",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d4/d4-1.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d4/d4-2.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d4/d4-3.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d4/d4-4.png",
		],
		system: "mt-arbora",
	});

	dice3d.addDicePreset({
		type: "d6",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d6/d6-1.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d6/d6-2.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d6/d6-3.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d6/d6-4.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d6/d6-5.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d6/d6-6.png",
		],
		system: "mt-arbora",
	});

	dice3d.addDicePreset({
		type: "d8",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d8/d8-1.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d8/d8-2.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d8/d8-3.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d8/d8-4.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d8/d8-5.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d8/d8-6.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d8/d8-7.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d8/d8-8.png",
		],
		system: "mt-arbora",
	});

	dice3d.addDicePreset({
		type: "d10",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d10/d10-1.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d10/d10-2.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d10/d10-3.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d10/d10-4.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d10/d10-5.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d10/d10-6.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d10/d10-7.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d10/d10-8.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d10/d10-9.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d10/d10-0.png",
		],
		system: "mt-arbora",
	});

	dice3d.addDicePreset({
		type: "d12",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d12/d12-1.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d12/d12-2.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d12/d12-3.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d12/d12-4.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d12/d12-5.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d12/d12-6.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d12/d12-7.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d12/d12-8.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d12/d12-9.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d12/d12-10.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d12/d12-11.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d12/d12-12.png",
		],
		system: "mt-arbora",
	});

	dice3d.addDicePreset({
		type: "d100",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d100/d100-10.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d100/d100-20.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d100/d100-30.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d100/d100-40.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d100/d100-50.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d100/d100-60.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d100/d100-70.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d100/d100-80.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d100/d100-90.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d100/d100-100.png",
		],
		system: "mt-arbora",
	});

	dice3d.addDicePreset({
		type: "d20",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-1.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-2.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-3.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-4.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-5.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-6.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-7.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-8.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-9.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-10.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-11.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-12.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-13.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-14.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-15.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-16.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-17.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-18.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-19.png",
			"modules/shyanns-obojima-dice/assets/faces/mt-arbora/d20/d20-20.png",
		],
		system: "mt-arbora",
	});

	///

	dice3d.addSystem(
		{ id: "underwater", name: "★ Obojima Dice: Underwater" },
		false,
	);

	dice3d.addDicePreset({
		type: "d2",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/underwater/d2/d2-1.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d2/d2-2.png",
		],
		system: "underwater",
	});

	dice3d.addDicePreset({
		type: "d4",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/underwater/d4/d4-1.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d4/d4-2.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d4/d4-3.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d4/d4-4.png",
		],
		system: "underwater",
	});

	dice3d.addDicePreset({
		type: "d6",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/underwater/d6/d6-1.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d6/d6-2.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d6/d6-3.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d6/d6-4.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d6/d6-5.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d6/d6-6.png",
		],
		system: "underwater",
	});

	dice3d.addDicePreset({
		type: "d8",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/underwater/d8/d8-1.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d8/d8-2.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d8/d8-3.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d8/d8-4.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d8/d8-5.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d8/d8-6.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d8/d8-7.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d8/d8-8.png",
		],
		system: "underwater",
	});

	dice3d.addDicePreset({
		type: "d10",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/underwater/d10/d10-1.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d10/d10-2.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d10/d10-3.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d10/d10-4.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d10/d10-5.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d10/d10-6.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d10/d10-7.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d10/d10-8.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d10/d10-9.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d10/d10-0.png",
		],
		system: "underwater",
	});

	dice3d.addDicePreset({
		type: "d12",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/underwater/d12/d12-1.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d12/d12-2.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d12/d12-3.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d12/d12-4.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d12/d12-5.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d12/d12-6.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d12/d12-7.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d12/d12-8.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d12/d12-9.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d12/d12-10.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d12/d12-11.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d12/d12-12.png",
		],
		system: "underwater",
	});

	dice3d.addDicePreset({
		type: "d100",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/underwater/d100/d100-10.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d100/d100-20.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d100/d100-30.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d100/d100-40.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d100/d100-50.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d100/d100-60.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d100/d100-70.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d100/d100-80.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d100/d100-90.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d100/d100-100.png",
		],
		system: "underwater",
	});

	dice3d.addDicePreset({
		type: "d20",
		labels: [
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-1.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-2.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-3.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-4.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-5.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-6.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-7.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-8.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-9.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-10.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-11.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-12.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-13.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-14.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-15.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-16.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-17.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-18.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-19.png",
			"modules/shyanns-obojima-dice/assets/faces/underwater/d20/d20-20.png",
		],
		system: "underwater",
	});
});
