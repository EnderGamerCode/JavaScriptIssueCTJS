import Settings from "./config";
import { Color } from "Vigilance";

// to open the config gui use the "openGUI" function
register("command", () => Settings.openGUI()).setName("FragHelper");

// to read/write config values, simply read/write them like normal js values
Settings.myColor = Color.RED;
console.log(Settings.textInput)

register("tick", GiantInWorld);

function GiantInWorld(){
        let giant = "";
		World.getAllEntitiesOfType(Java.type("net.minecraft.entity.monster.EntityGiantZombie").class).forEach(entity => {
			let living = new EntityLivingBase(entity.getEntity());
			let boots = living.getItemInSlot(1);
			if(boots.getName().includes("Diamond")) {
						giant = "Diamante";
                        ChatLib.chat("&bYou found a Diamante Giant!");
			}
			else if(boots.getRawNBT().includes("14755880")) {
						giant = "Bigfoot";
                        ChatLib.chat("&cYou found a Bigfoot Giant!");
			}
			else if(boots.getRawNBT().includes("16716947")) {
						giant = "Jolly Pink";
                        ChatLib.chat("&dYou found a Jolly Pink Giant!");
			}
			else {
						giant = "L.A.S.R";
                        ChatLib.chat("&bYou found a L.A.S.R Giant!");
			}
		});
}
    
