import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, Color } from 'Vigilance';

@Vigilant("FragRunHelper")
class Settings {
    @SwitchProperty({
        name: "Giant Notifications",
        description: "Get Notified when A Giant has spawned!",
        category: "General",
        subcategory: "Notification",
    })
    myButtonAction() {
    console.log("wow i have a button?!?");
    }    
    constructor() {
    this.initialize(this)
    this.setCategoryDescription("General", 
    "&aFragRunHelper " + version + "\n" + 
    "&7Made by EnderGamer#9495"
    )
    }
}

export default new Settings();