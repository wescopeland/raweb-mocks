import { faker } from '@faker-js/faker';

export const generateActivePlayer = () => {
  return {
    ConsoleName: faker.helpers.arrayElement(knownConsoleNames),
    GameID: faker.datatype.number(10_000),
    GameIcon: faker.helpers.arrayElement(knownGameIcons),
    GameTitle: faker.random.words(2),
    InGame: faker.datatype.boolean(),
    RAPoints: faker.datatype.number(100_000),
    RASoftcorePoints: faker.datatype.number(20_000),
    RichPresenceMsg: faker.random.words(15),
    User: faker.helpers.arrayElement(knownUsers),
  };
};

const knownConsoleNames = [
  'Watara Supervision',
  'NES',
  'NES',
  'PlayStation 2',
  'PlayStation 2',
  'PlayStation 2',
  'NES',
  'Arcade',
  'Virtual Boy',
  'PlayStation',
  'PlayStation',
  'NES',
  'SNES',
  'PlayStation',
  'Mega Drive',
  'PlayStation',
  'Nintendo DS',
  'Game Boy',
  'NES',
  'PlayStation 2',
  'PlayStation Portable',
  'Game Boy Advance',
  'Nintendo 64',
  'PC Engine CD',
  'PlayStation',
  'PlayStation 2',
  'SNES',
  'PlayStation',
  'NES',
  'Game Boy Advance',
  'PlayStation 2',
  'PlayStation',
  'NES',
  'SNES',
  'PlayStation',
  'Game Boy Color',
  'Game Boy Color',
  'Nintendo DS',
  'Mega Drive',
  'PlayStation 2',
  'Game Boy',
  'Arcade',
  'PlayStation',
  'SNES',
  'Nintendo DS',
  'PlayStation 2',
  'PlayStation 2',
  'Game Boy Advance',
  'Game Boy Color',
  'PlayStation',
  'Arcade',
  'Mega Drive',
  'Nintendo DS',
  'Game Boy Advance',
  'NES',
  'SNES',
  'Nintendo DS',
  'SNES',
  'Nintendo DS',
  'Nintendo DS',
  'Mega Drive',
  'SNES',
  'PlayStation Portable',
  'Mega Drive',
  'PlayStation',
  'Mega Drive',
  'Nintendo 64',
  'PlayStation',
  'PlayStation 2',
  'Mega Drive',
  'Game Boy Advance',
  'Nintendo DS',
  'PlayStation 2',
  'PlayStation Portable',
  'Arcade',
  'Mega Drive',
  'Nintendo DS',
  'WonderSwan',
  'Arcade',
  'PlayStation Portable',
  'PlayStation',
  'PlayStation 2',
  'NES',
  'WASM-4',
  'PlayStation 2',
  'Game Boy',
  'PlayStation',
  'NES',
  'Mega Drive',
  'NES',
  'PlayStation',
  'NES',
  'Nintendo 64',
  'Game Boy',
  'PlayStation',
  'PlayStation',
  'Game Boy Advance',
  'PlayStation',
  'PlayStation 2',
  'PlayStation',
  'Game Boy',
  'PlayStation',
  'SNES',
  'Game Boy Advance',
  'Nintendo 64',
  'Game Boy',
  'SNES',
  'WASM-4',
  'SNES',
  'PlayStation 2',
  'Sega CD',
  'Mega Drive',
  'SNES',
  'PlayStation',
  'PlayStation',
  'Game Boy Advance',
  'SNES',
  'PlayStation',
  'Nintendo DS',
  'SNES',
  'Game Boy Advance',
  'PlayStation 2',
  'Game Boy Advance',
  'PlayStation 2',
  'SNES',
  'SNES',
  'PlayStation 2',
  'SNES',
  'Game Boy',
  'PlayStation 2',
  'PlayStation 2',
  'NES',
  'Arcade',
  'Game Boy Color',
  'PlayStation',
  'SNES',
  'Nintendo 64',
  'PlayStation 2',
  'PlayStation Portable',
  'PlayStation 2',
  'WonderSwan',
  'Game Boy Advance',
  'Game Boy Color',
  'Game Boy Advance',
  'Nintendo DS',
  'Nintendo 64',
  'SNES',
  'Nintendo 64',
  'PlayStation',
  'Nintendo DS',
  'Nintendo 64',
  'Game Boy Advance',
  'PlayStation 2',
  'Nintendo DS',
  'SNES',
  'PlayStation 2',
  'Nintendo 64',
  'NES',
  'Game Boy Advance',
  'PlayStation',
  'Arcade',
  'PlayStation 2',
  'PlayStation 2',
  'SNES',
  'Game Boy Advance',
  'PlayStation 2',
  'MSX',
  'PlayStation 2',
  'PlayStation 2',
  'Game Boy Advance',
  'Nintendo DS',
  'PlayStation 2',
  'PlayStation 2',
  'Game Boy Color',
  'PlayStation Portable',
  'NES',
  'Game Boy',
  'PlayStation',
  'PlayStation Portable',
  'PlayStation 2',
  'Game Boy Advance',
  'Game Boy',
  'SNES',
  'SNES',
  'Mega Drive',
  'Game Boy Advance',
  'NES',
  'Game Boy Color',
  'Mega Drive',
  'Mega Drive',
  'Nintendo 64',
  'Game Boy Advance',
  'PlayStation 2',
  'SNES',
  'Nintendo DS',
  'Game Boy Advance',
  'Nintendo 64',
  'Nintendo 64',
  'PC Engine',
  'NES',
  'Game Boy Color',
  'Saturn',
  'PlayStation',
  'PlayStation',
  'PlayStation',
  'NES',
  'Game Boy Advance',
  'Game Boy Color',
  'SNES',
  'PlayStation 2',
  'PlayStation Portable',
  'Nintendo 64',
  'Nintendo 64',
  'NES',
  'Arcade',
  'Game Boy Advance',
  'Mega Drive',
  'Nintendo 64',
  'Nintendo 64',
  'PlayStation 2',
  'SNES',
  'SNES',
  'NES',
  'Game Boy',
  'SNES',
  'PlayStation',
  'PlayStation 2',
  'NES',
  'Game Boy Advance',
  'SNES',
  'Game Boy Advance',
  'Mega Drive',
  'NES',
  'PlayStation 2',
  'PlayStation 2',
  'Dreamcast',
  'Game Boy',
  'NES',
  'Game Boy Color',
  'PlayStation',
  'NES',
  'PlayStation',
  'Nintendo 64',
  'Sega CD',
  'PlayStation',
  'Mega Drive',
  'PlayStation 2',
  'PlayStation Portable',
  'NES',
  'NES',
  'SNES',
  'Game Boy Advance',
  'SNES',
  'PlayStation 2',
  'SNES',
  'SNES',
  'SNES',
  'PlayStation 2',
  'SNES',
  'PlayStation 2',
  'PlayStation',
  'PlayStation Portable',
  'PlayStation 2',
  'SNES',
  'Nintendo 64',
  'PlayStation 2',
  'Nintendo 64',
  'SNES',
  'PC Engine',
  'Arcade',
  'PlayStation 2',
  'NES',
  'PlayStation',
  'PlayStation Portable',
  'PlayStation',
  'SNES',
  'PlayStation',
  'NES',
  'Game Boy Color',
  'SNES',
  'Arcade',
  'Nintendo DS',
  'PlayStation 2',
  'SNES',
  'Game Boy Color',
  'Nintendo DS',
  'PlayStation 2',
  'Game Boy Advance',
  'Arcade',
  'Mega Drive',
  'Arcade',
  'PC Engine CD',
  'SNES',
  'Mega Drive',
  'PlayStation 2',
  'Arcade',
  'Nintendo 64',
  'SNES',
  'NES',
  'PlayStation 2',
  'SNES',
  'Nintendo 64',
  'SNES',
  'PlayStation',
  'Game Boy',
  'Game Boy Advance',
  'Arcade',
  'Game Boy',
  'Nintendo 64',
  'Nintendo DS',
  'PlayStation 2',
  'PlayStation 2',
  'Atari 2600',
  'PlayStation 2',
  'NES',
  'Mega Drive',
  'PlayStation 2',
  'Game Boy Color',
  'PlayStation',
  'Nintendo DS',
  'NES',
  'Game Boy',
  'Game Boy Color',
  'Atari 2600',
  'NES',
  'Mega Drive',
  'MSX',
  'PlayStation 2',
  'PlayStation',
  'NES',
  'Game Boy Advance',
  'PlayStation Portable',
  'PlayStation Portable',
  'Game Boy Color',
  'Nintendo 64',
  'SNES',
  'Game Boy Color',
  'SNES',
  'Game Boy Advance',
  'Game Boy',
  'Game Boy Advance',
  'Mega Drive',
  'Nintendo 64',
  'Game Boy Advance',
  'PlayStation 2',
  'Nintendo 64',
  'Game Boy Advance',
  'Game Boy Advance',
  'Game Boy Advance',
  'Game Boy Advance',
  'SNES',
  'Game Boy Advance',
  'Arcade',
  'NES',
  'NES',
  'PlayStation',
  'Pokemon Mini',
  'SNES',
  'SNES',
  'Mega Drive',
  'PlayStation 2',
  'Game Boy Advance',
  'Game Boy Color',
  'SNES',
  'Game Boy Color',
  'Mega Drive',
  'PlayStation',
  'Game Boy Advance',
  'PlayStation 2',
  'PlayStation',
  'Game Boy Color',
  'Nintendo DS',
  'SNES',
  'Nintendo 64',
  'Nintendo DS',
  'PlayStation 2',
  'SNES',
  'SNES',
  'Mega Drive',
  'PlayStation',
  'Saturn',
  'PlayStation Portable',
  'PlayStation',
  'NES',
  'Atari 2600',
  'Game Boy Advance',
  'PlayStation 2',
  'Nintendo DS',
  'NES',
  'PlayStation',
  'NES',
  'Arcade',
  'PlayStation',
  'Game Boy',
  'Game Boy Color',
  'NES',
  'Game Boy Color',
  'Game Boy',
  'PlayStation',
  'Nintendo DS',
  'NES',
  'Game Boy Color',
  'Nintendo 64',
  'Game Boy Advance',
  'PlayStation',
  'Game Boy Advance',
  'SNES',
  'Nintendo DS',
  'SNES',
  'Game Boy Advance',
  'Game Boy Advance',
  'Mega Drive',
  'SNES',
  'NES',
  'Game Boy Advance',
  'SNES',
  'PlayStation 2',
  'Nintendo DS',
  'PlayStation 2',
  'NES',
  'Game Boy Advance',
  'SNES',
  'Nintendo DS',
  'Game Boy Advance',
  'Mega Drive',
  'Nintendo 64',
  'NES',
  'PlayStation 2',
  'PlayStation 2',
  'NES',
  'PlayStation 2',
  'PlayStation',
  'Game Boy Advance',
  'Nintendo DS',
  'NES',
  'Mega Drive',
  'PlayStation',
  'Game Boy Advance',
  'Nintendo 64',
  'NES',
  'Game Boy Advance',
  'NES',
  'PlayStation',
  'PlayStation 2',
  'SNES',
  'Game Boy',
  'Nintendo DS',
  'Arcade',
  'Game Boy Color',
  'SNES',
  'PlayStation Portable',
  'NES',
  'Game Boy',
  'NES',
  'PlayStation',
  'SNES',
  'SNES',
  'Arcade',
  'PlayStation 2',
  'SNES',
  'Arcade',
  'Nintendo DS',
  'Mega Drive',
  'Nintendo DS',
  'NES',
  'Nintendo 64',
  'Game Boy Advance',
  'SNES',
  'PlayStation 2',
  'PlayStation',
  'Master System',
  'SNES',
  'SNES',
  'Mega Drive',
  'SNES',
  'Nintendo 64',
  'PlayStation 2',
  'SNES',
  'Nintendo DS',
  'SNES',
  'NES',
  'Mega Drive',
  'PlayStation 2',
  'Game Boy Advance',
  'PlayStation',
  'Game Boy',
  'Game Boy Advance',
  'Arcade',
  'PlayStation',
  'PlayStation 2',
  'NES',
  'SNES',
  'Mega Drive',
  'PlayStation 2',
  'PlayStation 2',
  'Game Boy Advance',
  'PlayStation Portable',
  'SNES',
  'Nintendo DS',
  'Game Boy Advance',
  'PlayStation 2',
  'SNES',
  'Game Boy Advance',
  'NES',
  'SNES',
  'PlayStation',
  'NES',
  'PlayStation',
  'PlayStation',
  'Game Boy Advance',
  'Nintendo DS',
  'SNES',
  'Nintendo 64',
  'Nintendo 64',
  'PlayStation 2',
  'NES',
  'Game Boy Advance',
  'Game Boy Advance',
  'Game Boy',
  'PlayStation 2',
  'Nintendo 64',
  'PlayStation',
  'Nintendo 64',
  'Game Boy Advance',
  'PlayStation 2',
  'PlayStation',
  'Nintendo DS',
  'Game Boy Advance',
  'PlayStation Portable',
  'PlayStation',
  'Game Boy Advance',
  'PlayStation',
  'Nintendo DS',
  'PlayStation',
  'Game Boy Advance',
  'Game Boy Advance',
  'Arcade',
  'Game Boy Color',
  'Game Boy Advance',
  'Game Boy Advance',
  'PlayStation',
  'SNES',
  'SNES',
  'PlayStation',
  'PlayStation 2',
  'NES',
  'Game Boy Color',
  'SNES',
  'Arcade',
  'PlayStation 2',
  'Game Boy',
  'SNES',
  'PlayStation',
  'NES',
  'PlayStation',
  'Mega Drive',
  'PlayStation',
  'PlayStation 2',
  'Arcade',
  'NES',
  'PlayStation 2',
  'PlayStation 2',
  'PlayStation 2',
  'PlayStation',
  'Game Boy Color',
  'Game Boy',
  'Nintendo 64',
  'Mega Drive',
  'PlayStation',
  'Mega Drive',
  'Master System',
  'Game Boy Color',
  'PlayStation 2',
  'PlayStation 2',
  'PlayStation Portable',
  'NES',
  'Game Boy Color',
  'PlayStation',
  'SNES',
  'Nintendo DS',
  'SNES',
  'PlayStation 2',
  'PlayStation 2',
  'Game Boy Advance',
  'Game Boy Color',
  'Nintendo DS',
  'Game Boy Advance',
  'SNES',
  'PlayStation Portable',
  'NES',
  'PlayStation 2',
  'Game Boy Advance',
  'PlayStation',
  'PlayStation',
  'NES',
  'PlayStation',
  'PlayStation',
  'SNES',
  'PlayStation 2',
  'Game Boy Advance',
  'PlayStation 2',
  'PlayStation',
  'Game Boy Advance',
  'PlayStation 2',
  'SNES',
  'PlayStation',
  'Game Boy Advance',
  'Arcade',
  'PlayStation',
  'SNES',
  'NES',
  'PlayStation 2',
  'Nintendo 64',
  'PlayStation',
  'SNES',
  'SNES',
  'Nintendo DS',
  'PlayStation',
  'PlayStation 2',
  'PlayStation 2',
  'Game Boy Advance',
  'PlayStation',
  'Game Boy Color',
  'PlayStation 2',
  'Game Boy',
  'SNES',
  'NES',
  'SNES',
  'NES',
  'Mega Drive',
  'Nintendo 64',
  'Game Boy Advance',
  'Game Boy Advance',
  'PlayStation',
  'SNES',
  'SNES',
  'Game Boy Advance',
  'Nintendo 64',
  'PlayStation',
  'PlayStation',
  'PlayStation 2',
  'NES',
  'Game Boy Advance',
  'Mega Drive',
  'PlayStation 2',
  'Nintendo 64',
  'PlayStation 2',
  'Mega Drive',
  'PlayStation 2',
  'Mega Drive',
  'PlayStation',
  'NES',
  'PlayStation',
  'SNES',
  'Mega Drive',
  'Game Boy Color',
  'SNES',
  'PlayStation',
  'SNES',
  'PlayStation 2',
  'PlayStation 2',
  'Game Boy Advance',
  'PlayStation 2',
  'PlayStation 2',
  'PlayStation 2',
  'Game Boy Color',
  'Game Boy Advance',
  'Game Boy Color',
  'SNES',
  'PlayStation 2',
  'PlayStation 2',
  'Nintendo 64',
  'Game Boy Advance',
  'PlayStation',
  'Nintendo DS',
  'SNES',
  'NES',
  'PlayStation',
  'SNES',
  'SNES',
  'SNES',
  'PlayStation',
  'PlayStation 2',
  'PlayStation',
  'SNES',
  'NES',
  'PlayStation 2',
  'Game Boy',
  'PlayStation 2',
  'NES',
  'PlayStation',
  'Game Boy Advance',
  'PlayStation 2',
  'Nintendo DS',
  'Nintendo DS',
  'PlayStation 2',
  'Arcade',
  'Nintendo 64',
  'PlayStation 2',
  'PlayStation',
  'SNES',
  'Arcade',
  'Dreamcast',
  'Nintendo DS',
  'PlayStation',
  'Game Boy Advance',
  'Game Boy Advance',
  'Nintendo 64',
  'NES',
  'PlayStation',
  'PlayStation',
  'PlayStation 2',
  'PlayStation',
  'SNES',
  'Game Boy Advance',
  'PlayStation',
  'PlayStation Portable',
  'PlayStation 2',
  'PlayStation 2',
  'NES',
  'Game Boy Advance',
  'SNES',
  'PlayStation',
  'PlayStation 2',
  'Arcade',
  'PlayStation',
  'PlayStation 2',
  'SNES',
  'Master System',
  'SNES',
  'PlayStation 2',
  'Game Boy Advance',
  'PlayStation',
  'PlayStation 2',
  'PlayStation',
  'PlayStation',
  'PlayStation 2',
  'PlayStation',
  'PlayStation 2',
  'PlayStation',
  'Nintendo 64',
  'Game Boy Advance',
  'Game Boy Color',
  'Game Boy Advance',
  'PlayStation 2',
  'PlayStation 2',
  'SNES',
  'Arcade',
  'NES',
  'PlayStation 2',
  'PlayStation 2',
  'PlayStation',
  'Dreamcast',
];

const knownGameIcons = [
  '/Images/044216.png',
  '/Images/047157.png',
  '/Images/068639.png',
  '/Images/061468.png',
  '/Images/069868.png',
  '/Images/062543.png',
  '/Images/068639.png',
  '/Images/029709.png',
  '/Images/051790.png',
  '/Images/027838.png',
  '/Images/038296.png',
  '/Images/061817.png',
  '/Images/041023.png',
  '/Images/035804.png',
  '/Images/038435.png',
  '/Images/060249.png',
  '/Images/049692.png',
  '/Images/064237.png',
  '/Images/026468.png',
  '/Images/067703.png',
  '/Images/049140.png',
  '/Images/024363.png',
  '/Images/046447.png',
  '/Images/050432.png',
  '/Images/033324.png',
  '/Images/069108.png',
  '/Images/069271.png',
  '/Images/068526.png',
  '/Images/068500.png',
  '/Images/045819.png',
  '/Images/062309.png',
  '/Images/067462.png',
  '/Images/017406.png',
  '/Images/041023.png',
  '/Images/066137.png',
  '/Images/044857.png',
  '/Images/034421.png',
  '/Images/040979.png',
  '/Images/045807.png',
  '/Images/063328.png',
  '/Images/035726.png',
  '/Images/066678.png',
  '/Images/049639.png',
  '/Images/036053.png',
  '/Images/059528.png',
  '/Images/061573.png',
  '/Images/058476.png',
  '/Images/050766.png',
  '/Images/049181.png',
  '/Images/032736.png',
  '/Images/058628.png',
  '/Images/069162.png',
  '/Images/034206.png',
  '/Images/066847.png',
  '/Images/059552.png',
  '/Images/059832.png',
  '/Images/043729.png',
  '/Images/009192.png',
  '/Images/054808.png',
  '/Images/046444.png',
  '/Images/069693.png',
  '/Images/041023.png',
  '/Images/069297.png',
  '/Images/069976.png',
  '/Images/032736.png',
  '/Images/053395.png',
  '/Images/040155.png',
  '/Images/042831.png',
  '/Images/067537.png',
  '/Images/061384.png',
  '/Images/060733.png',
  '/Images/061248.png',
  '/Images/061494.png',
  '/Images/047346.png',
  '/Images/031381.png',
  '/Images/054584.png',
  '/Images/063455.png',
  '/Images/062169.png',
  '/Images/035600.png',
  '/Images/047344.png',
  '/Images/049660.png',
  '/Images/057992.png',
  '/Images/060956.png',
  '/Images/061363.png',
  '/Images/056407.png',
  '/Images/057183.png',
  '/Images/059530.png',
  '/Images/044720.png',
  '/Images/050094.png',
  '/Images/069649.png',
  '/Images/034060.png',
  '/Images/033108.png',
  '/Images/022585.png',
  '/Images/005991.png',
  '/Images/044670.png',
  '/Images/042618.png',
  '/Images/056313.png',
  '/Images/035804.png',
  '/Images/063328.png',
  '/Images/032407.png',
  '/Images/069601.png',
  '/Images/044670.png',
  '/Images/061799.png',
  '/Images/038243.png',
  '/Images/045842.png',
  '/Images/061011.png',
  '/Images/066391.png',
  '/Images/061363.png',
  '/Images/023578.png',
  '/Images/059598.png',
  '/Images/017743.png',
  '/Images/067939.png',
  '/Images/061549.png',
  '/Images/056311.png',
  '/Images/034060.png',
  '/Images/060392.png',
  '/Images/048277.png',
  '/Images/059530.png',
  '/Images/067441.png',
  '/Images/008647.png',
  '/Images/044234.png',
  '/Images/052798.png',
  '/Images/066847.png',
  '/Images/061818.png',
  '/Images/061799.png',
  '/Images/055789.png',
  '/Images/061818.png',
  '/Images/041009.png',
  '/Images/034419.png',
  '/Images/061850.png',
  '/Images/068474.png',
  '/Images/049486.png',
  '/Images/065742.png',
  '/Images/046977.png',
  '/Images/033286.png',
  '/Images/021859.png',
  '/Images/020806.png',
  '/Images/066456.png',
  '/Images/049140.png',
  '/Images/069108.png',
  '/Images/050359.png',
  '/Images/066847.png',
  '/Images/067444.png',
  '/Images/034449.png',
  '/Images/035990.png',
  '/Images/069887.png',
  '/Images/043274.png',
  '/Images/033126.png',
  '/Images/031766.png',
  '/Images/043871.png',
  '/Images/040155.png',
  '/Images/024363.png',
  '/Images/056389.png',
  '/Images/053954.png',
  '/Images/022110.png',
  '/Images/053369.png',
  '/Images/045842.png',
  '/Images/030479.png',
  '/Images/054937.png',
  '/Images/019054.png',
  '/Images/036095.png',
  '/Images/058476.png',
  '/Images/053369.png',
  '/Images/023582.png',
  '/Images/060092.png',
  '/Images/062252.png',
  '/Images/053627.png',
  '/Images/069666.png',
  '/Images/058476.png',
  '/Images/066847.png',
  '/Images/065335.png',
  '/Images/056407.png',
  '/Images/058476.png',
  '/Images/057197.png',
  '/Images/049789.png',
  '/Images/024519.png',
  '/Images/038382.png',
  '/Images/031766.png',
  '/Images/056892.png',
  '/Images/057479.png',
  '/Images/024313.png',
  '/Images/038520.png',
  '/Images/022933.png',
  '/Images/046591.png',
  '/Images/056792.png',
  '/Images/042758.png',
  '/Images/060930.png',
  '/Images/067444.png',
  '/Images/024874.png',
  '/Images/045889.png',
  '/Images/040155.png',
  '/Images/042055.png',
  '/Images/066773.png',
  '/Images/041023.png',
  '/Images/067003.png',
  '/Images/046731.png',
  '/Images/067971.png',
  '/Images/047327.png',
  '/Images/024931.png',
  '/Images/003105.png',
  '/Images/034452.png',
  '/Images/055077.png',
  '/Images/064824.png',
  '/Images/033291.png',
  '/Images/050159.png',
  '/Images/059053.png',
  '/Images/004132.png',
  '/Images/057179.png',
  '/Images/066393.png',
  '/Images/062543.png',
  '/Images/053615.png',
  '/Images/047942.png',
  '/Images/022051.png',
  '/Images/039245.png',
  '/Images/066678.png',
  '/Images/066847.png',
  '/Images/039151.png',
  '/Images/014372.png',
  '/Images/045842.png',
  '/Images/069786.png',
  '/Images/036039.png',
  '/Images/059119.png',
  '/Images/059688.png',
  '/Images/045693.png',
  '/Images/059476.png',
  '/Images/069934.png',
  '/Images/069063.png',
  '/Images/039740.png',
  '/Images/069630.png',
  '/Images/008647.png',
  '/Images/024363.png',
  '/Images/061323.png',
  '/Images/053940.png',
  '/Images/063566.png',
  '/Images/056407.png',
  '/Images/053539.png',
  '/Images/069793.png',
  '/Images/066649.png',
  '/Images/034451.png',
  '/Images/035028.png',
  '/Images/032778.png',
  '/Images/065586.png',
  '/Images/047952.png',
  '/Images/017743.png',
  '/Images/034673.png',
  '/Images/038325.png',
  '/Images/056040.png',
  '/Images/049640.png',
  '/Images/069648.png',
  '/Images/024505.png',
  '/Images/044873.png',
  '/Images/043327.png',
  '/Images/045911.png',
  '/Images/058476.png',
  '/Images/066393.png',
  '/Images/054629.png',
  '/Images/066393.png',
  '/Images/063566.png',
  '/Images/060989.png',
  '/Images/058476.png',
  '/Images/069933.png',
  '/Images/069297.png',
  '/Images/056888.png',
  '/Images/066498.png',
  '/Images/064539.png',
  '/Images/056888.png',
  '/Images/069710.png',
  '/Images/041023.png',
  '/Images/047333.png',
  '/Images/058591.png',
  '/Images/053369.png',
  '/Images/068639.png',
  '/Images/050017.png',
  '/Images/056892.png',
  '/Images/031766.png',
  '/Images/036648.png',
  '/Images/066893.png',
  '/Images/047082.png',
  '/Images/046977.png',
  '/Images/021859.png',
  '/Images/000001.png',
  '/Images/067672.png',
  '/Images/058476.png',
  '/Images/022686.png',
  '/Images/046977.png',
  '/Images/039370.png',
  '/Images/062373.png',
  '/Images/008231.png',
  '/Images/068578.png',
  '/Images/038194.png',
  '/Images/000001.png',
  '/Images/052569.png',
  '/Images/059119.png',
  '/Images/000107.png',
  '/Images/053369.png',
  '/Images/032927.png',
  '/Images/022051.png',
  '/Images/067893.png',
  '/Images/009694.png',
  '/Images/056389.png',
  '/Images/066498.png',
  '/Images/057291.png',
  '/Images/022933.png',
  '/Images/059515.png',
  '/Images/004376.png',
  '/Images/049979.png',
  '/Images/021730.png',
  '/Images/009345.png',
  '/Images/065859.png',
  '/Images/066999.png',
  '/Images/058042.png',
  '/Images/034183.png',
  '/Images/054739.png',
  '/Images/062422.png',
  '/Images/067845.png',
  '/Images/069871.png',
  '/Images/058476.png',
  '/Images/040642.png',
  '/Images/042831.png',
  '/Images/046274.png',
  '/Images/014949.png',
  '/Images/034419.png',
  '/Images/023367.png',
  '/Images/055461.png',
  '/Images/024522.png',
  '/Images/050767.png',
  '/Images/067216.png',
  '/Images/066024.png',
  '/Images/027365.png',
  '/Images/009364.png',
  '/Images/042054.png',
  '/Images/057913.png',
  '/Images/061616.png',
  '/Images/022048.png',
  '/Images/042725.png',
  '/Images/060586.png',
  '/Images/037002.png',
  '/Images/054628.png',
  '/Images/042859.png',
  '/Images/034450.png',
  '/Images/049979.png',
  '/Images/064494.png',
  '/Images/045842.png',
  '/Images/034678.png',
  '/Images/062196.png',
  '/Images/041427.png',
  '/Images/059158.png',
  '/Images/066855.png',
  '/Images/052963.png',
  '/Images/034422.png',
  '/Images/066391.png',
  '/Images/056313.png',
  '/Images/050582.png',
  '/Images/064757.png',
  '/Images/047650.png',
  '/Images/030848.png',
  '/Images/053899.png',
  '/Images/014908.png',
  '/Images/038721.png',
  '/Images/001555.png',
  '/Images/062863.png',
  '/Images/040341.png',
  '/Images/059761.png',
  '/Images/021859.png',
  '/Images/034421.png',
  '/Images/067895.png',
  '/Images/069933.png',
  '/Images/042088.png',
  '/Images/059908.png',
  '/Images/051475.png',
  '/Images/046977.png',
  '/Images/049978.png',
  '/Images/060989.png',
  '/Images/045842.png',
  '/Images/028718.png',
  '/Images/053369.png',
  '/Images/060989.png',
  '/Images/047014.png',
  '/Images/000795.png',
  '/Images/044670.png',
  '/Images/049443.png',
  '/Images/065205.png',
  '/Images/066137.png',
  '/Images/043239.png',
  '/Images/061320.png',
  '/Images/034422.png',
  '/Images/062570.png',
  '/Images/048371.png',
  '/Images/054193.png',
  '/Images/059255.png',
  '/Images/024519.png',
  '/Images/069926.png',
  '/Images/040161.png',
  '/Images/038520.png',
  '/Images/022316.png',
  '/Images/064350.png',
  '/Images/043418.png',
  '/Images/054635.png',
  '/Images/059254.png',
  '/Images/048945.png',
  '/Images/006266.png',
  '/Images/034421.png',
  '/Images/026595.png',
  '/Images/067445.png',
  '/Images/042831.png',
  '/Images/069709.png',
  '/Images/068638.png',
  '/Images/035990.png',
  '/Images/010101.png',
  '/Images/046590.png',
  '/Images/042438.png',
  '/Images/057215.png',
  '/Images/063507.png',
  '/Images/017213.png',
  '/Images/024363.png',
  '/Images/036053.png',
  '/Images/058476.png',
  '/Images/034206.png',
  '/Images/058476.png',
  '/Images/060148.png',
  '/Images/059662.png',
  '/Images/006389.png',
  '/Images/046594.png',
  '/Images/059551.png',
  '/Images/067895.png',
  '/Images/047942.png',
  '/Images/055631.png',
  '/Images/061552.png',
  '/Images/061590.png',
  '/Images/064350.png',
  '/Images/063339.png',
  '/Images/060107.png',
  '/Images/040177.png',
  '/Images/051476.png',
  '/Images/049611.png',
  '/Images/065591.png',
  '/Images/042618.png',
  '/Images/034449.png',
  '/Images/040625.png',
  '/Images/049611.png',
  '/Images/060995.png',
  '/Images/058716.png',
  '/Images/059255.png',
  '/Images/062863.png',
  '/Images/045213.png',
  '/Images/060955.png',
  '/Images/042484.png',
  '/Images/000001.png',
  '/Images/024809.png',
  '/Images/059393.png',
  '/Images/049616.png',
  '/Images/012851.png',
  '/Images/034419.png',
  '/Images/052571.png',
  '/Images/064755.png',
  '/Images/024811.png',
  '/Images/066393.png',
  '/Images/000001.png',
  '/Images/058042.png',
  '/Images/059119.png',
  '/Images/000001.png',
  '/Images/028310.png',
  '/Images/038428.png',
  '/Images/039370.png',
  '/Images/012851.png',
  '/Images/022051.png',
  '/Images/045108.png',
  '/Images/069326.png',
  '/Images/053369.png',
  '/Images/044211.png',
  '/Images/058710.png',
  '/Images/059119.png',
  '/Images/045841.png',
  '/Images/042945.png',
  '/Images/059119.png',
  '/Images/026595.png',
  '/Images/053987.png',
  '/Images/066748.png',
  '/Images/067672.png',
  '/Images/025833.png',
  '/Images/045855.png',
  '/Images/039151.png',
  '/Images/056888.png',
  '/Images/042054.png',
  '/Images/044644.png',
  '/Images/034419.png',
  '/Images/034678.png',
  '/Images/065554.png',
  '/Images/031766.png',
  '/Images/066024.png',
  '/Images/023369.png',
  '/Images/046572.png',
  '/Images/034382.png',
  '/Images/063877.png',
  '/Images/063566.png',
  '/Images/042859.png',
  '/Images/064176.png',
  '/Images/014908.png',
  '/Images/046594.png',
  '/Images/060995.png',
  '/Images/061468.png',
  '/Images/066498.png',
  '/Images/042758.png',
  '/Images/064350.png',
  '/Images/066393.png',
  '/Images/046663.png',
  '/Images/059053.png',
  '/Images/056311.png',
  '/Images/051208.png',
  '/Images/059551.png',
  '/Images/044315.png',
  '/Images/060989.png',
  '/Images/024312.png',
  '/Images/047942.png',
  '/Images/069060.png',
  '/Images/006183.png',
  '/Images/063671.png',
  '/Images/069558.png',
  '/Images/024368.png',
  '/Images/069060.png',
  '/Images/026595.png',
  '/Images/051475.png',
  '/Images/047942.png',
  '/Images/067287.png',
  '/Images/063566.png',
  '/Images/056311.png',
  '/Images/047118.png',
  '/Images/042404.png',
  '/Images/047405.png',
  '/Images/042618.png',
  '/Images/042055.png',
  '/Images/059759.png',
  '/Images/028310.png',
  '/Images/046228.png',
  '/Images/043937.png',
  '/Images/024363.png',
  '/Images/031993.png',
  '/Images/046977.png',
  '/Images/024363.png',
  '/Images/060995.png',
  '/Images/046663.png',
  '/Images/041009.png',
  '/Images/060989.png',
  '/Images/049404.png',
  '/Images/063397.png',
  '/Images/066719.png',
  '/Images/062621.png',
  '/Images/049182.png',
  '/Images/035636.png',
  '/Images/066024.png',
  '/Images/069601.png',
  '/Images/034930.png',
  '/Images/035804.png',
  '/Images/042741.png',
  '/Images/033324.png',
  '/Images/044625.png',
  '/Images/049667.png',
  '/Images/053369.png',
  '/Images/049652.png',
  '/Images/063165.png',
  '/Images/058092.png',
  '/Images/056407.png',
  '/Images/066139.png',
  '/Images/042618.png',
  '/Images/043418.png',
  '/Images/028004.png',
  '/Images/040159.png',
  '/Images/046588.png',
  '/Images/046663.png',
  '/Images/025170.png',
  '/Images/064914.png',
  '/Images/067978.png',
  '/Images/063012.png',
  '/Images/061603.png',
  '/Images/046914.png',
  '/Images/045855.png',
  '/Images/034421.png',
  '/Images/027365.png',
  '/Images/054557.png',
  '/Images/045573.png',
  '/Images/021859.png',
  '/Images/061949.png',
  '/Images/061494.png',
  '/Images/029865.png',
  '/Images/046977.png',
  '/Images/048945.png',
  '/Images/041644.png',
  '/Images/066390.png',
  '/Images/049140.png',
  '/Images/059053.png',
  '/Images/062863.png',
  '/Images/066821.png',
  '/Images/066731.png',
  '/Images/020301.png',
  '/Images/047650.png',
  '/Images/038296.png',
  '/Images/054686.png',
  '/Images/008647.png',
  '/Images/061603.png',
  '/Images/041644.png',
  '/Images/066024.png',
  '/Images/068516.png',
  '/Images/028332.png',
  '/Images/052798.png',
  '/Images/025232.png',
  '/Images/042618.png',
  '/Images/060995.png',
  '/Images/029087.png',
  '/Images/054359.png',
  '/Images/066393.png',
  '/Images/017213.png',
  '/Images/069108.png',
  '/Images/024311.png',
  '/Images/059516.png',
  '/Images/028586.png',
  '/Images/016920.png',
  '/Images/030622.png',
  '/Images/054359.png',
  '/Images/061590.png',
  '/Images/056407.png',
  '/Images/034422.png',
  '/Images/025358.png',
  '/Images/066026.png',
  '/Images/053988.png',
  '/Images/034450.png',
  '/Images/063507.png',
  '/Images/036035.png',
  '/Images/060989.png',
  '/Images/047650.png',
  '/Images/038194.png',
  '/Images/027388.png',
  '/Images/059231.png',
  '/Images/059158.png',
  '/Images/046663.png',
  '/Images/064259.png',
  '/Images/060989.png',
  '/Images/042054.png',
  '/Images/047942.png',
  '/Images/051475.png',
  '/Images/042618.png',
  '/Images/064525.png',
  '/Images/059053.png',
  '/Images/039083.png',
  '/Images/067488.png',
  '/Images/062863.png',
  '/Images/041731.png',
  '/Images/058245.png',
  '/Images/000001.png',
  '/Images/069060.png',
  '/Images/020064.png',
  '/Images/042618.png',
  '/Images/047156.png',
  '/Images/000001.png',
  '/Images/059476.png',
  '/Images/008684.png',
  '/Images/034421.png',
  '/Images/050147.png',
  '/Images/062627.png',
  '/Images/040154.png',
  '/Images/034183.png',
  '/Images/063566.png',
  '/Images/041644.png',
  '/Images/062863.png',
  '/Images/069108.png',
  '/Images/060156.png',
  '/Images/034451.png',
  '/Images/054900.png',
  '/Images/034421.png',
  '/Images/022600.png',
  '/Images/069060.png',
  '/Images/063739.png',
  '/Images/025172.png',
  '/Images/064643.png',
  '/Images/068516.png',
  '/Images/063592.png',
  '/Images/047014.png',
  '/Images/013524.png',
  '/Images/026724.png',
  '/Images/021859.png',
  '/Images/022686.png',
  '/Images/064517.png',
  '/Images/059254.png',
  '/Images/062863.png',
  '/Images/019054.png',
  '/Images/046271.png',
  '/Images/043888.png',
  '/Images/062863.png',
  '/Images/057183.png',
  '/Images/063566.png',
  '/Images/039421.png',
  '/Images/044075.png',
  '/Images/060995.png',
  '/Images/066024.png',
  '/Images/035990.png',
  '/Images/059744.png',
  '/Images/053369.png',
  '/Images/000001.png',
  '/Images/024312.png',
  '/Images/067021.png',
  '/Images/054686.png',
  '/Images/051579.png',
  '/Images/036853.png',
  '/Images/036797.png',
  '/Images/063592.png',
  '/Images/046663.png',
  '/Images/034422.png',
  '/Images/041644.png',
  '/Images/047942.png',
  '/Images/047650.png',
  '/Images/066892.png',
  '/Images/069935.png',
  '/Images/061494.png',
  '/Images/051208.png',
  '/Images/066393.png',
  '/Images/028136.png',
  '/Images/015284.png',
  '/Images/048626.png',
  '/Images/063653.png',
  '/Images/062863.png',
  '/Images/028423.png',
  '/Images/068339.png',
  '/Images/034928.png',
  '/Images/035804.png',
  '/Images/062373.png',
  '/Images/049652.png',
  '/Images/068516.png',
  '/Images/062570.png',
  '/Images/041023.png',
  '/Images/049192.png',
  '/Images/048031.png',
  '/Images/064525.png',
  '/Images/023099.png',
  '/Images/064368.png',
  '/Images/063961.png',
  '/Images/054359.png',
  '/Images/047338.png',
  '/Images/063094.png',
  '/Images/042618.png',
  '/Images/053369.png',
  '/Images/049693.png',
  '/Images/047942.png',
  '/Images/060995.png',
  '/Images/043419.png',
  '/Images/042054.png',
  '/Images/066773.png',
  '/Images/061946.png',
  '/Images/054709.png',
  '/Images/029567.png',
  '/Images/036035.png',
  '/Images/064132.png',
  '/Images/058091.png',
  '/Images/046663.png',
  '/Images/051849.png',
];

const knownUsers = [
  'MaxMilyin',
  'donutweegee',
  'AmericanNinja',
  'ChronoGear',
  'AuburnRDM',
  'Grahamtams',
  'starlite',
  'missiray',
  'Amir96lx',
  'HeisenHower',
  'Vyach59',
  'Shroomer',
  'Retrokaiser',
  'Shishio64',
  'Nevanos',
  'Orph',
  'KlydeKadell',
  'gustavovaladares',
  'RomaKiev',
  'Tomberry',
  'ToxicAntidote',
  'Tirbaba',
  'dericobanjo',
  'televandalist',
  'Golem',
  'jabman696',
  'XPEHOBB',
  'Rub88',
  'Jazerus',
  'Lockerdown3',
  'Doggy227',
  'Signum',
  'diablo666',
  'msdmario',
  'Pronin86',
  'Hdot12',
  'Tayadaoc',
  'ZintheDestroyr',
  'ReversePolarity',
  'ockerjj',
  'Malkil',
  'Throgg',
  'mike50900',
  'Etron',
  'Val1407',
  'Linkgameplay',
  'WeerDough',
  'LiveFastCyYoung',
  'Dehly',
  'Kasder',
  'Erodion',
  'NickDeleted',
  'CassetteCobra',
  'FrancisFreudespiel',
  'Deansrule',
  'Tiagofsp',
  'MisfitMatt187',
  'TheRealBillHicks',
  'heintsi',
  'CuddleBugs',
  'VGLongplays',
  'genesislover',
  'Caelum',
  'Kyluya',
  'TuxedoMask',
  'PARKOUR62',
  'D0ubleWhammy',
  'DarknessMan',
  'openroom',
  'Tehachapi',
  'napu',
  'Agnam',
  'paule01',
  'Spendragon',
  'KingOfYeyo',
  'Fanera',
  'Botch',
  'Galante',
  'GUGA0x3',
  'Kaizard',
  'GoddessBow',
  'SeveredDream',
  'OldSport',
  'MarioKness',
  'BorisoffAnton91',
  'Calsun',
  'spikeriley',
  'bertsampson',
  'Langrizzer',
  'suspect15',
  'Ishbale',
  'APN',
  'Duske',
  'joker1000',
  'atzero89',
  'AndersonCS',
  'BarryBurtonBlodia',
  'ryuzakix',
  'amine456',
  'Cronos74',
  'plutopower',
  'Eric99333',
  'Wayne121',
  'dokaikan',
  'hirumaspace',
  'maritimeretro',
  'lcsaba12',
  'kmpers',
  'clevertonheusner',
  'Mooseh',
  'SynbiosRex',
  'Alexdatadestroyer',
  'auty',
  'kandata',
  'GizmoMonkey',
  'rodent',
  'METRO',
  'SyrValfreyja',
  'Rampagingtaru',
  'JailDesigner',
  'luanthefox',
  'valts',
  'abwaerts',
  'Orosius',
  'SmallRoach',
  'christianbpn',
  'Peouz',
  'PikachuInTheShower',
  'Rubicate',
  'ReverieEmanon',
  'Venomothim',
  'Brandon402',
  'RossWyatt',
  'BudCaveTV',
  'tmap',
  'Eltana',
  'jNastyWSA',
  'Beruga',
  'grishka',
  'GenericMadScientist',
  'Mortinho',
  'BigFish',
  'xenoriddley',
  'RyanRJ',
  'kurtkiste',
  'DarkyAndreas',
  'andline',
  'XymjakThe2nd',
  'Sachiel',
  'AVDC',
  'Wolfsighs',
  'Somaku',
  'cainslove',
  'Sloppydj',
  'Erixx',
  'Hurd0687',
  'DynamixDJ',
  'gratsmon',
  'VitorKDT',
  'SrOliveira',
  'sllide',
  'Appotheozz',
  'NatsuKen',
  'RomPais',
  'jughead88',
  'Fridge',
  'Falcus',
  'Casually',
  'midgetstrawdog',
  'ONLYUSEmeFEET',
  'ZelnickByDay',
  'dfreez',
  'LightingFlame',
  'BKhisDudeness',
  'RedrumOverdose',
  'Hamatuth',
  'Spark5S',
  'SeranaTheTrans',
  'Impeller',
  'AqueleEizo',
  'Astreon9',
  'GuimaTRB',
  'phb2k1',
  'ThiagoBFiorenza',
];