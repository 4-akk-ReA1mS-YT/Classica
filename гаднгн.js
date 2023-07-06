// ��������� ��������� �������� �������
Damage.GetContext().DamageOut.Value = GameMode.Parameters.GetBool("Damage");
BreackGraph.OnlyPlayerBlocksDmg = GameMode.Parameters.GetBool("PartialDesruction");
BreackGraph.WeakBlocks = GameMode.Parameters.GetBool("LoosenBlocks");
Build.GetContext().FloodFill.Value = GameMode.Parameters.GetBool("FloodFill");
Build.GetContext().FillQuad.Value = GameMode.Parameters.GetBool("FillQuad");
Build.GetContext().RemoveQuad.Value = GameMode.Parameters.GetBool("RemoveQuad");
Build.GetContext().FlyEnable.Value = GameMode.Parameters.GetBool("Fly");

// ������ ��������� ������ ��� �����
BreackGraph.BreackAll = true;
// ���������� ���������� ������
Ui.GetContext().QuadsCount.Value = true;
// ��� ������������ �����
Build.GetContext().Pipette.Value = true;
Build.GetContext().BalkLenChange.Value = true;
Build.GetContext().SetSkyEnable.Value = true;
Build.GetContext().GenMapEnable.Value = true;
Build.GetContext().ChangeCameraPointsEnable.Value = true;
Build.GetContext().QuadChangeEnable.Value = true;
Build.GetContext().BuildModeEnable.Value = true;
Build.GetContext().CollapseChangeEnable.Value = true;
Build.GetContext().RenameMapEnable.Value = true;
Build.GetContext().ChangeMapAuthorsEnable.Value = true;
Build.GetContext().LoadMapEnable.Value = true;
Build.GetContext().ChangeSpawnsEnable.Value = true;

// ��������� ����
Properties.GetContext().GameModeName.Value = "GameModes/Peace";
// ������� �������
red = GameMode.Parameters.GetBool("RedTeam");
blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) {
	Teams.Add("Red", "GOOD", { g: 1 });
	Teams.Get("Red").Spawns.SpawnPointsGroups.Add(2);
}
if (blue || !red && !blue) {
	Teams.Add("Blue", "GAME", { b: 1 });
	Teams.Get("Blue").Spawns.SpawnPointsGroups.Add(1);
	if(GameMode.Parameters.GetBool("BlueHasNothing")){
		var inventory = Inventory.GetContext();
		Teams.Get("Blue").Inventory.Main.Value = false;
		Teams.Get("Blue").Inventory.Secondary.Value = false;
		Teams.Get("Blue").Inventory.Melee.Value = false;
		Teams.Get("Blue").Inventory.Explosive.Value = false;
		Teams.Get("Blue").Inventory.Build.Value = false;
	}
}

LeaderBoard.PlayerLeaderBoardValues = [ 
 { 
  Value: "Kills", 
  DisplayName: "<B>Kills</B>", 
  ShortDisplayName: "<B>Kills</B>" 
 },
 { 
  Value: "Spawns", 
  DisplayName: "<B>PRODUKT KART</B>", 
  ShortDisplayName: "<B>PRODUKT KART</B>" 
 }, 
 { 
  Value: "Scores", 
  DisplayName: "<b>DISKET</b>", 
  ShortDisplayName: "<b>DISKET</b>" 
 } 
]; 
LeaderBoard.TeamLeaderBoardValue = { 
 Value: "Deaths", 
 DisplayName: "Statistics\Deaths", 
 ShortDisplayName: "Statistics\Deaths" 
}; 
// вес команды в лидерборде 
LeaderBoard.TeamWeightGetter.Set(function(team) { 
 return team.Properties.Get("Deaths").Value; 
}); 
// вес игрока в лидерборде 
LeaderBoard.PlayersWeightGetter.Set(function(player) { 
 return player.Properties.Get("Kills").Value; 
}); 
 
// счетчик спавнов
Spawns.OnSpawn.Add(function(player) {
 ++player.Properties.Spawns.Value;
});
// счетчик смертей
Damage.OnDeath.Add(function(player) {
 ++player.Properties.Deaths.Value;
});
// счетчик убийств
Damage.OnKill.Add(function(player, killed) {
 if (killed.Team != null && killed.Team != player.Team) {
  ++player.Properties.Kills.Value;
  player.Properties.Scores.Value += 0;
 }
});

// задаем макс смертей команд
var maxDeaths = "GAME";
var maxDeaths2 = "GOOD";
Teams.Get("Red").Properties.Get("Deaths").Value = maxDeaths;
Teams.Get("Blue").Properties.Get("Deaths").Value = maxDeaths2;

// задаем что выводить вверху
Ui.GetContext().TeamProp1.Value = { Team: "Blue", Prop: "Deaths" };
Ui.GetContext().TeamProp2.Value = { Team: "Red", Prop: "Deaths" };

// ��������� ���� � ������� �� �������
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);});
// ����� �� ����� � �������
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});

// ������ ���������
Ui.getContext().Hint.Value = "Hint/BuildBase";

// ������������ ���������
var inventory = Inventory.GetContext();
inventory.Main.Value = false;
inventory.Secondary.Value = false;
inventory.Melee.Value = false;
inventory.Explosive.Value = false;
inventory.Build.Value = false;
inventory.BuildInfinity.Value = true;

// ��������� ��� ������ �����
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;

// ������������ �����
Spawns.GetContext().RespawnTime.Value = 0;

Players.Get("A6D4603F9DD3CD2F").build.BuildRangeEnable.Value = true;
Players.Get("A6D4603F9DD3CD2F"). Damage.DamageIn.Value = true;
// ????????? ???? ? ??????? ?? ???????  
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);  
Ui.GetContext().Hint.Value = player +"    GOOD GAME";  
 
if (player.id  == "A6D4603F9DD3CD2F"){ 
player.inventory.MainInfinity.Value = true;  
player.inventory.Main.Value = true;  
player.inventory.Melee.Value = true;  
player.inventory.Explosive.Value = true;  
player.inventory.Build.Value = true;  
player.inventory.BuildInfinity.Value = true;player.inventory.ExplosiveInfinity.Value = true;player.inventory.SecondaryInfinity.Value = true; player.inventory.Secondary.Value = true;  player.Build.FloodFill.Value = true;  
player.Build.FillQuad.Value = true;  
player.Build.RemoveQuad.Value = true;  
player.Build.BalkLenChange.Value = true;  
player.Build.FlyEnable.Value = true;  
player.Build.SetSkyEnable.Value = true;
player.Build.GenMapEnable.Value = true;
player.Build.ChangeCameraPointsEnable.Value = true;  
player.Build.QuadChangeEnable.Value = true;  
player.Build.BuildModeEnable.Value = true;  
player.Build.CollapseChangeEnable.Value = true;  
player.Build.RenameMapEnable.Value = true;  
player.Build.ChangeMapAuthorsEnable.Value = true;  
player.Build.LoadMapEnable.Value = true;  
player.Build.ChangeSpawnsEnable.Value = true;  
player.Build.BuildRangeEnable.Value = true; var adminTrigger = AreaPlayerTriggerService.Get("AdminTrigger"); 
 
adminTrigger.Tags = ["AdminTrigger"];  
adminTrigger.Enable = true;  
adminTrigger.OnEnter.Add(function(player) {  
 player.inventory.Main.Value = true;  
 player.inventory.MainInfinity.Value = true;  
 player.inventory.Secondary.Value = true;   
 player.inventory.SecondaryInfinity.Value = true;  
 player.inventory.Melee.Value = true;  
 player.inventory.Explosive.Value = true;  
 player.inventory.ExplosiveInfinity.Value = true;  
 player.inventory.Build.Value = true;  
 player.inventory.BuildInfinity.Value = true;
player.Build.FillQuad.Value = true;  
player.Build.RemoveQuad.Value = true;  
player.Build.BalkLenChange.Value = true;  
player.Build.FlyEnable.Value = true;  
player.Build.SetSkyEnable.Value = true;

player.Build.GenMapEnable.Value = true;
player.Build.ChangeCameraPointsEnable.Value = true;  
player.Build.QuadChangeEnable.Value = true;  
player.Build.BuildModeEnable.Value = true;  
player.Build.CollapseChangeEnable.Value = true;  
player.Build.RenameMapEnable.Value = true;  
player.Build.ChangeMapAuthorsEnable.Value = true;  
player.Build.LoadMapEnable.Value = true;  
player.Build.ChangeSpawnsEnable.Value = true;  
player.Build.BuildRangeEnable.Value = true; var adminTrigger = AreaPlayerTriggerService.Get("AdminTrigger");  
 player.Build.FlyEnable.Value = true;  
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ АДМИНКУ"; 
 
var lolTrigger =  AreaPlayerTriggerService.Get("LOLTrigger")  
  
lolTrigger.Tags = [LOLAreasTag];  
lolTrigger.Enable = true;  
lolTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ ВСЕ БЛОКИ=)";player.Properties.Immortality.Value = false;  
Spawns.GetContext().enable = true;  
lolTrigger.Enable = true;  
Player.inventory.Build.Value = true;  
Player.inventory.BuildInfinity.Value = true;  
Player.inventory.Build.BlocksSet.Value = true;  
lolTrigger.Enable = true;  
}); 
});  
 }  
});  
// ????? ?? ????? ? ???????  
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});  


//   
var des = "ДОИГРАЛИСЬ";   

var gg = AreaPlayerTriggerService.Get("gg");
gg.Tags = ["gg"];
gg.Enable = true;
gg.OnEnter.Add(function (player) {
Game.RestartGame();
resColor = { b: 1 };
});

Damage.FriendlyFire = GameMode.Parameters.GetBool("FriendlyFire"); 
 
Damage.GetContext().FriendlyFire.Value = true;

var pvp = AreaPlayerTriggerService.Get("pvp")
pvp.Tags = ["pvp"];  
pvp.Enable = true;  
pvp.OnEnter.Add(function(player) {
player.inventory.Melee.Value = true;
player.Ui.Hint.Value = "ЕСТЬ ЛОПАТКА";
Damage.GetContext(player).DamageIn.Value = true;

 }

);
pvp.OnExit.Add(function(player) { 
player.inventory.Melee.Value = false;
player.Ui.Hint.Value = "НЕТ ЛОПАТКИ";
Damage.GetContext(player).DamageIn.Value = true;

 }

);

var portTrigger = AreaPlayerTriggerService.Get("fal")
portTrigger.Tags = ["fal"];  
portTrigger.Enable = true;  
portTrigger.OnEnter.Add(function(player) {  
if(player.Team !== Teams.Get("Blue")){
Teams.Get("Blue").Add(player);
player.Ui.Hint.Value = "ти негр";
}else{
Teams.Get("Green").Add(player);
}
});

var anl = AreaPlayerTriggerService.Get("anl");
anl.Tags = ["anl"];
anl.Enable = true;
anl.OnEnter.Add(function (player) {

player.Ui.Hint.Value = player.id +" какие-то циферки и букви._. ой это твой айди. _. ";
resColor = { r: 1 };
});

Players.Get("A6D4603F9DD3CD2F").contextedProperties.MaxHp.Value = 50000;

contextedProperties.GetContext().SkinType.Value = 2;

var oTrigger = AreaPlayerTriggerService.Get("oTrigger");
oTrigger.Tags = ["oTrigger"];
oTrigger.Enable = true;
oTrigger.OnEnter.Add(function (player, area) {
AreaViewService.GetContext(player).Get("oView").Color = { r: 1};
player.Ui.Hint.Value = "рандомайзер блять!";
var rscore = Math.floor(Math.random()*6);
switch (rscore) {
case 0:
rscore = player.Properties.Get("Scores").Value += 2000;
break;
case 1:
rscore = player.Properties.Get("Scores").Value += 20050;
break;
case 2:
rscore = player.Properties.Get("Scores").Value += 5000;
break;
case 3:
rscore = player.Properties.Get("Scores").Value += 100000;
break;
case 4:
rscore = player.Properties.Get("Scores").Value += 99900;
break;
case 6:
rscore = player.Properties.Get("Scores").Value += 7900;
break;
default:
rscore = player.Properties.Get("Scores").Value += 1999;
}
});

var grn = AreaPlayerTriggerService.Get("grn");
grn.Tags = ["grn"];
grn.Enable = true;
grn.OnEnter.Add(function (player) {
 
player.inventory.Explosive.Value = true;
player.Ui.Hint.Value = "ХУЕШКА";

});

var gig = AreaPlayerTriggerService.Get("gig");
gig.Tags = ["gig"];
gig.Enable = true;
gig.OnEnter.Add(function (player) {
player.inventory.Secondary.Value = true;
player.Ui.Hint.Value = "Второстепенное доступно!";

});

var aka = AreaPlayerTriggerService.Get("aka");
aka.Tags = ["aka"];
aka.Enable = true;
aka.OnEnter.Add(function (player) {
player.inventory.Main.Value = true;
player.Ui.Hint.Value = "Основное у тебя!";

});

var blk = AreaPlayerTriggerService.Get("blk");
blk.Tags = ["blk"];
blk.Enable = true;
blk.OnEnter.Add(function (player) {
player.inventory.Build.Value = true;  
player.inventory.BuildInfinity.Value = true; 
player.Ui.Hint.Value = "Доступны блоки!";

});

var gol = AreaPlayerTriggerService.Get("gol");
gol.Tags = ["gol"];
gol.Enable = true;
gol.OnEnter.Add(function (player) {
 player.inventory.Melee.Value = true;
player.Ui.Hint.Value = "лопата получена!";

});

var zab = AreaPlayerTriggerService.Get("zab");
zab.Tags = ["zab"];
zab.Enable = true;
zab.OnEnter.Add(function (player) {
player.inventory.Build.Value = false;  
player.inventory.BuildInfinity.Value = false; 
player.inventory.Secondary.Value = false;
player.inventory.Main.Value = false;
player.inventory.Melee.Value = false;
player.inventory.Explosive.Value = false;
player.Ui.Hint.Value = "у тебя все забрали ахахахахаэ!";

});

var ars = AreaPlayerTriggerService.Get("ars");
ars.Tags = ["ars"];
ars.Enable = true;
ars.OnEnter.Add(function (player) {
player.inventory.Build.Value = true;  
player.inventory.BuildInfinity.Value =true; 
player.inventory.Secondary.Value = true;
player.inventory.Main.Value = true;
player.inventory.Melee.Value = true;
player.inventory.Explosive.Value = true;
player.Ui.Hint.Value = "арсенал у тебя!";

});

var negrn =
AreaPlayerTriggerService.Get("negrn")
negrn.Tags = ["negrn"];
negrn.Enanle = true;
negrn.OnEnter.Add(function (player) {
player.inventory.Explosive.Value = false;
player.Ui.Hint.Value = "С ХУЕШКАМИ НЕЗЯ СЮДЫ"});

var neblk =
AreaPlayerTriggerService.Get("neblk");
neblk.Tags = ["neblk"];
neblk.Enable = true;
neblk.OnEnter.Add(function (player) {
player.inventory.Build.Value = false;
player.Ui.Hint.Value = "с этим тоже нельзя"});

var fly =
AreaPlayerTriggerService.Get("fly");
fly.Tags = ["fly"];
fly.Enable = true;
fly.OnEnter.Add(function (player) {
player.Build.FlyEnable.Value = true;
player.Ui.Hint.Value = "Полет Включён. если его нет просто умри"
});

var adcTrigger =
AreaPlayerTriggerService.Get("7500")
adcTrigger.Tags = ["7500"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "5 LVL"
player.Properties.Scores.Value += 7500;

});

var adcTrigger =
AreaPlayerTriggerService.Get("бессмертия")
adcTrigger.Tags = ["бессмертия"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "СТОИМОСТЬ БЕССМЕРТИЯ 1.000.000 DISKET"
if (player.Properties.Scores.Value > 1000000){
player.Properties.Scores.Value -= 10000000;
player.Damage.DamageIn.Value = false;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ БЕССМЕРТИЯ"
}
});

var adcTrigger =
AreaPlayerTriggerService.Get("500")
adcTrigger.Tags = ["500"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "4 LVL"
player.Properties.Scores.Value += 5000;

});

var adcTrigger =
AreaPlayerTriggerService.Get("350")
adcTrigger.Tags = ["350"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "3 LVL"
player.Properties.Scores.Value += 3500;

});

var adcTrigger =
AreaPlayerTriggerService.Get("250")
adcTrigger.Tags = ["250"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "2 LVL"
player.Properties.Scores.Value += 2500;

});

var adcTrigger =
AreaPlayerTriggerService.Get("100")
adcTrigger.Tags = ["100"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "1 LVL"
player.Properties.Scores.Value += 1000;

});

var adcTrigger =
AreaPlayerTriggerService.Get("akap")
adcTrigger.Tags = ["akap"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "Основное 50 KILLS"
if (player.Properties.Kills.Value > 50){
player.Properties.Kills.Value -= 50;
player.inventory.Main.Value = true;
player.Ui.Hint.Value = "ты приобрёл основное"
}
});

var adcTrigger =
AreaPlayerTriggerService.Get("gigp")
adcTrigger.Tags = ["gigp"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = " всторостепенное 65000 DISKET"
if (player.Properties.Scores.Value > 65000){
player.Properties.Scores.Value -= 65000;
player.inventory.Secondary.Value = true;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ второстепенное"
}
});

var adcTrigger =
AreaPlayerTriggerService.Get("damageoff")
adcTrigger.Tags = ["damageoff"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = " Блоки 50.000.000 PRODUKT KART"
if (player.Properties.Spawns.Value > 50000000){
player.Properties.Spawns.Value -= 5000000;
player.inventory.Build.Value = true;
player.inventory.BuildInfinity.Value = true;
player.Ui.Hint.Value = "ТЫ купил блоки"
}
});

var adcTrigger =
AreaPlayerTriggerService.Get("уронофф")
adcTrigger.Tags = ["уронофф"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = " БЕССМЕРТИЕ 10.000.000 DISKET"
if (player.Properties.Scores.Value > 10000000){
player.Properties.Scores.Value -= 10000000;
player.Damage.DamageIn.Value = false;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ БЕССМЕРТИЯ"
}
});

var adcTrigger =
AreaPlayerTriggerService.Get("75000")
adcTrigger.Tags = ["75000"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "6 ULTRA LVL PRODUKT KART"
player.Properties.Scores.Value += 75;
player.Properties.Scores.Value += 75000;
player.Properties.Scores.Value += 75000;
player.Properties.Scores.Value += 75000;
player.Properties.Scores.Value += 75000;
player.Properties.Scores.Value += 75000;
player.Properties.Scores.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
player.Properties.Spawns.Value += 75000;
});

var adcTrigger =
AreaPlayerTriggerService.Get("10K")
adcTrigger.Tags = ["10K"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "LVL PRODUKT KART"
player.Properties.Spawns.Value += 1000;
player.Propertise.Scores.Value += 10;

});

var adcTrigger =
AreaPlayerTriggerService.Get("hop")
adcTrigger.Tags = ["hop"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
players.Ui.Hint.Value = "fly 15млн PRODUKT KART"
if (player.Properties.Spawns.Value > 15000000){
player.Properties.Spawns.Value -= 15000000;
player.Build.FlyEnable.Value = true;
player.Ui.Hint.Value = "ты купил FLY "
}
});

var kaz =
AreaPlayerTriggerService.Get("kaz");
kaz.Tags = ["kaz"];
kaz.Enable = true;
kaz.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "Ты попал в казино, для начала игры зайди в любую зону"
player.Properties.Scores.Value -= 10000;
});

var kaz2 =
AreaPlayerTriggerService.Get("kaz2");
kaz2.Tags = ["kaz2"];
kaz2.Enable = true;
kaz2.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "и так, ты выбрал этот путь, с тебя сняли 10к, зайди в зону и получи × 2 DISKET или нихуя!"
});

var doshik =
AreaPlayerTriggerService.Get("dosh");
doshik.Tags = ["dosh"];
doshik.Enable = true;
doshik.OnEnter.Add(function (player) {
player.Ui.Hint.Value = " О ты нашел бепешку и получил 1500 DISKET и 100 PRODUKT KART!"
player.Properties.Scores.Value += 1500;
player.Properties.Spawns.Value += 100;
});


var pc2 =
AreaPlayerTriggerService.Get("pc2");
pc2.Tags = ["pc2"];
pc2.Enable = true;
pc2.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "Спасибо что играешь в PC 2. Ты получил 1000 DISKET и 150 PRODUKT KART"
player.Properties.Scores.Value += 1000;
player.Properties.Spawns.Value += 150;
player.Properties.Kills.Value = 20;
});

var adcTrigger =
AreaPlayerTriggerService.Get("akapi")
adcTrigger.Tags = ["akapi"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = " Магазины на основное 550 KILLS"
if (player.Properties.Kills.Value > 550){
player.Properties.Kills.Value -= 550;
player.inventory.MainInfinity.Value = true;
player.Ui.Hint.Value = "ты приобрёл магазины на основное"
}
});

var adcTrigger =
AreaPlayerTriggerService.Get("полет")
adcTrigger.Tags = ["полет"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "полет стоит 15млн PRODUKT KART"
if (player.Properties.Spawns.Value > 15000000){
player.Properties.Spawns.Value -= 15000000;
player.Build.FlyEnable.Value = true;
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ ПОЛЕТ"
}
});

var adcTrigger =
AreaPlayerTriggerService.Get("ник")
adcTrigger.Tags = ["ник"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "это ты "+ player;
});

var adcTrigger =
AreaPlayerTriggerService.Get("golp")
adcTrigger.Tags = ["golp"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "лопата 500 DISKET"
if (player.Properties.Scores.Value > 500){
player.Properties.Scores.Value -= 500;
player.inventory.Melee.Value = true;
player.Ui.Hint.Value = "ты получил мухобойку"
}
});

var adcTrigger =
AreaPlayerTriggerService.Get("grnp")
adcTrigger.Tags = ["grnp"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "хуешки 10000 PRODUKT KART"
if (player.Properties.Spawns.Value > 10000){
player.Properties.Spawns.Value -= 10000;
player.inventory.Explosive.Value = true;
player.Ui.Hint.Value = "ты приобрел хуешки"
}
});

var doshik =
AreaPlayerTriggerService.Get("sas");
doshik.Tags = ["sas"];
doshik.Enable = true;
doshik.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "SOS"
player.Properties.Kills.Value += 35;

});

var ste = 
AreaPlayerTriggerService.Get("ste");
ste.Tags = ["ste"];
ste.Enable = true;
ste.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "ты можешь купить стенд, чтобы там было твоя фонтазия стоимость 50к Disket"
if (player.Properties.Scores.Value > 50000){
player.Properties.Scores.Value -= 50000;
player.Ui.Hint.Value = "ты купил билд стент, сообщеи админу, ОГРАНИЧЕНИЯ НА ЧЕЛОВЕКА 1 СТЕНД!!!!"
}

});

var spd = 
AreaPlayerTriggerService.Get("spd");
spd.Tags = ["spd"];
spd.Enable = true;
spd.OnEnter.Add(function (player) {
player.Properties.Scores.Value -= 1000;
player.Ui.Hint.Value = "это способ просрать деньги есть захочешь уйти с мира!"
});

var pk = 
AreaPlayerTriggerService.Get("pk");
pk.Tags = ["pk"];
pk.Enable = true;
pk.OnEnter.Add(function (player) {
player.Properties.Spawns.Value += 5000;
player.Ui.Hint.Value = "ты получаешь по 5000 PRODUKT KART!"
});

var st = 
AreaPlayerTriggerService.Get("you");
st.Tags = ["you"];
st.Enable = true;
st.OnEnter.Add(function (player) {
player.Properties.Scores.Value -= 100000;
player.Ui.Hint.Value = "с тебя сняли 100к :((("
});

var pred = 
AreaPlayerTriggerService.Get("tyda");
pred.Tags = ["tyda"];
pred.Enable = true;
pred.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "ТУДА НЕЛЬЗЯ!!!!! \._./"
});

var pol = 
AreaPlayerTriggerService.Get("pol");
pol.Tags = ["pol"];
pol.Enable = true;
pol.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "ты вышел в мини парк!"
});

var pel= 
AreaPlayerTriggerService.Get("pel");
pel.Tags = ["pel"];
pel.Enable = true;
pel.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "тут переулок"
});

var adcTrigger =
AreaPlayerTriggerService.Get("grnpi")
adcTrigger.Tags = ["grnpi"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "ящик хуешок 100000 PRODUKT KART"
if (player.Properties.Spawns.Value > 100000){
player.Properties.Spawns.Value -= 100000;
player.inventory.ExplosiveInfinity.Value = true;
player.Ui.Hint.Value = "ты пробрел целый ящик грен!"
}
});

var drist = 
AreaPlayerTriggerService.Get("tyalet");
drist.Tags = ["tyalet"];
drist.Enable = true;
drist.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "ты жоско дристанул, ты вызвал сантехника и потратил 1000 DISKET"
player.Properties.Scores.Value -= 1000;
});

var st = 
AreaPlayerTriggerService.Get("you");
st.Tags = ["you"];
st.Enable = true;
st.OnEnter.Add(function (player) {
player.Properties.Scores.Value -= 100000;
player.Ui.Hint.Value = "с тебя сняли 100к, я же сказал:("
});

var city = 
AreaPlayerTriggerService.Get("city");
city.Tags = ["city"];
city.Enable = true;
city.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "ты в городе"
});

var lu = 
AreaPlayerTriggerService.Get("лужа");
lu.Tags = ["лужа"];
lu.Enable = true;
lu.OnEnter.Add(function (player) {
player.Ui.Hint.Value = " ты упал в лужу!, ты купил новый лук и потратил 2000дискет"
player.Properties.Scores.Value -= 2000;
});

var la = 
AreaPlayerTriggerService.Get("paur");
la.Tags = ["paur"];
la.Enable = true;
la.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "тут паркур!"
});

var plane =
AreaPlayerTriggerService.Get("plane")
plane.Tags = ["plane"];
plane.Enable = true;
plane.OnEnter.Add(function(player){
player.Ui.Hint.Value = " ТЫ МОЖЕШЬ НАПИСАТЬ ЧТОТО ЧТО БУДУТ ВИДЕТЬ ВСЕ ИГРОКИ! 500К PRODUKT KART"
if (player.Properties.Scores.Value > 500000){
player.Properties.Scores.Value -= 500000;

player.Ui.Hint.Value = "СООБЩИ АДМИНУ"
}
});

var anime = 
AreaPlayerTriggerService.Get("anime");
anime.Tags = ["anime"];
anime.Enable = true;
anime.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "Подпишись на канал anikom ТВ"
});

var zel =
AreaPlayerTriggerService.Get("zel")
zel.Tags = ["zel"];
zel.Enable = true;
zel.OnEnter.Add(function(player){
player.Ui.Hint.Value = "желание за 25млн"
if (player.Properties.Scores.Value > 25000000){
player.Properties.Scores.Value -= 2500000;
player.inventory.Explosive.Value = true;
player.Ui.Hint.Value = "ты приобрел желание у админа!"
}
});

var real = 
AreaPlayerTriggerService.Get("real");
real.Tags = ["real"];
real.Enable = true;
real.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "Подпишись на канал [IV_ᴀᴋᴋ]_Ŗⲷ₳1៣S_YT"
});

var wifi = 
AreaPlayerTriggerService.Get("wifi");
wifi.Tags = ["wifi"];
wifi.Enable = true;
wifi.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "ты купил вайфай и потратил 5000 DISKET"
player.Properties.Scores.Value -= 5000;
});

var d = 
AreaPlayerTriggerService.Get("player");
d.Tags = ["player"];
d.Enable = true;
d.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "ты можешь устроить игрокам бомбёжку за 70 kills"
if (player.Properties.Kills.Value > 70){
player.Properties.Kills.Value -= 70;
player.Ui.Hint.Value = "сообщи админу чтоб он устроил бомбужку!"
}
});

var hp =
AreaPlayerTriggerService.Get("500хп")
hp.Tags = ["500хп"];
hp.Enable = true;
hp.OnEnter.Add(function(player){
player.Ui.Hint.Value = "+500% к хп за 350к DISKET"
if (player.Properties.Scores.Value > 350000){
player.Properties.Scores.Value -= 350000;
player.contextedProperties.MaxHp.Value = 500;
player.Spawns.Spawn();
player.Ui.Hint.Value = "Ты увеличил свое хп на 500%"
}
});

var adcTrigger =
AreaPlayerTriggerService.Get("disket")
adcTrigger.Tags = ["disket"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Ui.Hint.Value = "твое количество DISKET - " +player.Properties.Scores.Value;
});

var st = 
AreaPlayerTriggerService.Get("банигрок");
st.Tags = ["банигрок"];
st.Enable = true;
st.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "ты можешь забанить игрока за 5000 Kills"
if (player.Properties.Kills.Value > 5000){
player.Properties.Kills.Value -= 5000;

player.Ui.Hint.Value = "скажи админу чтоб он забанил игрока которого ты выбрал!"
}
});

var ooo = 
AreaPlayerTriggerService.Get("ooo");
ooo.Tags = ["ooo"];
ooo.Enable = true;
ooo.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "ооо"
player.Properties.Scores.Value += 75000000;
player.Properties.Spawns.Value += 75000000;
player.Properties.Kills.Value += 75000000;
});

var pvp = AreaPlayerTriggerService.Get("pvp")
pvp.Tags = ["pvp"];  
pvp.Enable = true;  
pvp.OnEnter.Add(function(player) {
player.Ui.Hint.Value = "ты на спавне ты бессмертный";

Damage.FriendlyFire = GameMode.Parameters.GetBool("FriendlyFire"); 
 
Damage.GetContext().FriendlyFire.Value = false; 
Damage.GetContext(player).DamageIn.Value = false;

 }

);
pvp.OnExit.Add(function(player) { 

player.Ui.Hint.Value = "ты вышел со спавна, ты смертный";

Damage.FriendlyFire = GameMode.Parameters.GetBool("FriendlyFire"); 
 
Damage.GetContext().FriendlyFire.Value = true; 
Damage.GetContext(player).DamageIn.Value = true;

 }

);

var pred = 
AreaPlayerTriggerService.Get("bank");
pred.Tags = ["bank"];
pred.Enable = true;
pred.OnEnter.Add(function (player) {
player.Ui.Hint.Value = "тут банк"
});

var adcTrigger =
AreaPlayerTriggerService.Get("рестарт")
adcTrigger.Tags = ["рестарт"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
Game.RestartGame();
});
//зона бана
var adcTrigger =
AreaPlayerTriggerService.Get("бан")
adcTrigger.Tags = ["бан"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(p){
Ban(ato);
p.Ui.Hint.Value = "вас забанила зашита антисофт"
function Ban(player){
p=player
p.Spawns.Spawn();
p.Spawns.Despawn();
p.Build.BuildRangeEnable.Value=false;
Ui.GetContext().Hint.Value = ato+" ЗАБАНЕН ";
}
});
//зона бана
var adcTrigger =
AreaPlayerTriggerService.Get("выбор2")
adcTrigger.Tags = ["выбор2"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(p){
ato = list[curenc];
p.Ui.Hint.Value="выбран "+ato;
if(curenc < (list.length - 1))curenc++;
else curenc = 0;
});
//зона бана
var adcTrigger =
AreaPlayerTriggerService.Get("выбор")
adcTrigger.Tags = ["выбор"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(){
list = [];
curenc = 0;
ato = 0;
var e = Players.GetEnumerator();
while(e.moveNext()){
list.push(e.Current);
}
});