const relativePath = "../../HawkenGame/CookedPC/Robots.u";
const baseFileSizeInBytes = 78_019.579;
const decompressedFileSizeInBytes = 144_748_383;

const replacements = [    

    //Patch Version 1.7.0
    {
        offset: 0x005CE76D,
        from: [0x50, 0x41, 0x58, 0x20, 0x50, 0x72, 0x69, 0x6D, 0x65, 0x20, 0x32, 0x30, 0x31, 0x32, 0x20, 0x7C, 0x7C, 0x20, 0x50, 0x72, 0x65, 0x2D, 0x41, 0x6C, 0x70, 0x68, 0x61],
          to: [0x50, 0x41, 0x58, 0x2B, 0x20, 0x43, 0x6F, 0x6D, 0X6D, 0x75, 0x6E, 0x69, 0x74, 0x79, 0x20, 0x50, 0x61, 0x74, 0x63, 0x68, 0x20, 0x31, 0x2E, 0x37, 0x2E, 0x30, 0x20]
    },

    //Subtypes
    { offset: 0x00638BB2, from: [0x05], to: [0x02] }, //Change MechSubtype0 ability to Ballistic Barrage
    { offset: 0x0063987C, from: [0x01], to: [0x04] }, //Change MechSubtype2 secondary to SAARE
    /*{
        offset: 0x00639085,
        from: [0x05, 0x00, 0x00, 0x00, 0xDB, 0x0A, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xD6, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0B],
        to:   [0x01, 0x00, 0x00, 0x00, 0x34, 0x0E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xD6, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03]
    },*/ //Change MechSubtype3 ability to index 1, secondary to index 3. Preadator changes.
    { offset: 0x006391F0, from: [0x01], to: [0x05] }, //Change MechSubtype4 secondary to Repair Torch    
    { offset: 0x006396DE, from: [0x05], to: [0x03] }, //Change MechSubtype7 ability to Weapons Coolant
    { offset: 0x00639D4F, from: [0x08], to: [0x09] }, //Change MechSubtype13 ability to Mobile Turret

    //Items
    { offset: 0x0054e573, from: [0xC0, 0x40], to: [0xD0, 0x40] }, //Increase MG turret damage to 6.5
    { offset: 0x0054E539, from: [0x9A, 0x99, 0x19, 0x3E], to: [0xCD, 0xCC, 0x4C, 0x3E], }, //Decrease MG turret refire time from 0.15s to 0.25s
    { offset: 0x0054E58D, from: [0x2C, 0x01], to: [0xB4, 0x00] }, //Decrease Turret initial Health to 180
    { offset: 0x0054E5A9, from: [0x2C, 0x01], to: [0xB4, 0x00] }, //Decrease Turret max Health to 180    
    { offset: 0x0054E6D2, from: [0x98, 0x3A], to: [0xEC, 0x2C] }, //Decrease Turret MaxTargetDistance to 11500
    { offset: 0x0055530A, from: [0x58, 0x02], to: [0x3F, 0x02] }, //Change Blockade Health to 575
    { offset: 0x00555328, from: [0x80, 0x3F], to: [0x80, 0x3E] }, //Change Blockade ShieldSize to 0.25x
    { offset: 0x00555344, from: [0x40, 0x40], to: [0x80, 0x3F] }, //Change Blockade Max Size to 1
    { offset: 0x00555360, from: [0x00, 0x40], to: [0x40, 0x3F] }, //Change Blockade ExpandTime to 0.75s
    { offset: 0x0055537C, from: [0xC0, 0x40], to: [0x80, 0x3F] }, //Change Blockade ContractTime to 1s
    { offset: 0x0055548B, from: [0xC8, 0x41], to: [0x50, 0x41] }, //Change Blockade Lifespan to 13s
    { offset: 0x0067AA0C, from: [0xD4], to: [0xD3] }, //Swap R_Proj_Blockade Velocity.X and Velocity.Y
    { offset: 0x0067AA1C, from: [0xD3], to: [0xD4] }, //Blockade spawns perpendicular to player now.
    { offset: 0x00609ACC,
        from: [0x49, 0x6D, 0x61, 0x67, 0x65, 0x73, 0x2E, 0x44, 0x65, 0x66, 0x61, 0x75, 0x6C, 0x74, 0x57, 0x65, 0x61, 0x70, 0x6F, 0x6E, 0x50, 0x69, 0x63], 
          to: [0x69, 0x63, 0x6F, 0x6E, 0x73, 0x5F, 0x73, 0x74, 0x61, 0x74, 0x69, 0x73, 0x74, 0x69, 0x63, 0x73, 0x5F, 0x62, 0x6F, 0x6F, 0x73, 0x74, 0x00]
    }, //Change Blockade Icon from placeholder
    {
        offset: 0x006096A3,
        from: [0xFB, 0x30, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x20, 0x2F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x36, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x32, 0x00, 0x00, 0x00, 0x54, 0x45, 0x4D, 0x50, 0x20, 0x74, 0x68, 0x69, 0x73, 0x20, 0x69, 0x73, 0x20, 0x73, 0x6F, 0x6D, 0x65, 0x20, 0x74, 0x6F, 0x6F, 0x6C, 0x74, 0x69, 0x70, 0x20, 0x74, 0x65, 0x78, 0x74, 0x20, 0x66, 0x6F, 0x72, 0x20, 0x74, 0x68, 0x65, 0x20, 0x41, 0x72, 0x65, 0x61, 0x20, 0x52, 0x61, 0x64, 0x61, 0x72],
          to: [0x8C, 0x17, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x20, 0x2F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x2B, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x32, 0x00, 0x00, 0x00, 0x55, 0x49, 0x2E, 0x49, 0x6D, 0x61, 0x67, 0x65, 0x73, 0x2E, 0x69, 0x63, 0x6F, 0x6E, 0x73, 0x5F, 0x73, 0x6B, 0x69, 0x6C, 0x6C, 0x5F, 0x73, 0x68, 0x6F, 0x6F, 0x74, 0x69, 0x6E, 0x67, 0x52, 0x61, 0x64, 0x61, 0x72, 0x44, 0x69, 0x73, 0x74, 0x61, 0x6E, 0x63, 0x65, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]
    }, //Change Radar Icon from placeholder
    { offset: 0x00609667, from: [0x01], to: [0x00] }, //Change Radar item from passive to active to enable usage.
    { offset: 0x00609C6B, from: [0x01], to: [0x00] }, //Change Sensor item from passive to active to enable usage.
    {
        offset: 0x0060C792,
        from: [0x5E, 0x1F, 0x00, 0x00, 0xD7, 0x24, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xD6, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x28, 0x01, 0x00, 0x00, 0x80, 0x16, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xD6, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0xE7, 0x0E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x40, 0x13, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x2F, 0x43, 0x54, 0x1D, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xD6, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x13, 0x00, 0x00, 0x00, 0x2E, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xD7, 0x0E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x20, 0x2F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0B, 0x00, 0x00, 0x00, 0x54, 0x45, 0x4C, 0x45, 0x50, 0x4F, 0x52, 0x54, 0x45, 0x52, 0x00, 0xFB, 0x30, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x20, 0x2F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x12, 0x00, 0x00, 0x00, 0x50, 0x6F, 0x72, 0x74, 0x61, 0x6C, 0x20, 0x54, 0x65, 0x6C, 0x65, 0x70, 0x6F, 0x72, 0x74, 0x65, 0x72, 0x00],
          to: [0x5E, 0x1F, 0x00, 0x00, 0x8C, 0x17, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x20, 0x2F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x21, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1D, 0x00, 0x00, 0x00, 0x55, 0x49, 0x2E, 0x49, 0x6D, 0x61, 0x67, 0x65, 0x73, 0x2E, 0x69, 0x63, 0x6F, 0x6E, 0x73, 0x5F, 0x73, 0x6B, 0x69, 0x6C, 0x6C, 0x5F, 0x68, 0x65, 0x61, 0x6C, 0x74, 0x68, 0x32, 0x54, 0x1D, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xD6, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x2E, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0xD7, 0x0E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x20, 0x2F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0B, 0x00, 0x00, 0x00, 0x52, 0x45, 0x50, 0x41, 0x49, 0x52, 0x20, 0x4F, 0x52, 0x42, 0x00, 0xFB, 0x30, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x20, 0x2F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x31, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x2D, 0x00, 0x00, 0x00, 0x4D, 0x65, 0x63, 0x68, 0x20, 0x48, 0x65, 0x61, 0x6C, 0x69, 0x6E, 0x67, 0x20, 0x4F, 0x72, 0x62, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]
    }, //Replace Teleporter icon from placeholder, reduce Teleporter uses to 1
    { offset: 0x0060A6A2, from: [0x04], to: [0x01] }, //Reduce Combat Drone uses to 1
    { offset: 0x0060A4F4, from: [0xFA], to: [0x02] }, //Reduce Combat Drone initial health to 130
    { offset: 0x0060A50C, from: [0xFA], to: [0x02] }, //Reduce Combat Drone max health to 130
    { offset: 0x00683CB4, from: [0x34, 0x42], to: [0x20, 0x42] }, //Decrease Rocket Turret Damage to 40
    { offset: 0x006841A8, from: [0x20, 0x42], to: [0x0C, 0x42] }, //Decrease Seeker Turret Damage to 35
    { offset: 0x00687763, from: [0x5E, 0x01], to: [0xC2, 0x01] }, //Change Shield HP to 450
    { offset: 0x00687406, from: [0xB0, 0x40], to: [0x00, 0x41] }, //Increase Shield size to 8
    { offset: 0x006874E9, from: [0xB0, 0x40], to: [0x00, 0x41] }, //Increase Shield size to 8
    { offset: 0x006877B9, from: [0x80, 0x40], to: [0x80, 0x3F] }, //Change Shield death contract time to 1s

    //DmgTypes
    { offset: 0x005AD199, from: [0x01], to: [0x00] }, //Disable HEAT Cannon knockback
    { offset: 0x005ADA2F, from: [0x01], to: [0x00] }, //Disable Grenade Launcher knockback
    { offset: 0x005ADDC8, from: [0x01], to: [0x00] }, //Disable Hellfire knockback
    { offset: 0x005AE0F8, from: [0x01], to: [0x00] }, //Disable TOW knockback
    { offset: 0x005AE5C9, from: [0x01], to: [0x00] }, //Disable Seeker knockback
    { offset: 0x005AEA5B, from: [0x01], to: [0x00] }, //Disable SAARE knockback
    { offset: 0x005AF2DE, from: [0x01], to: [0x00] }, //Disable Tri-Seeker knockback
    { offset: 0x005AF4A3, from: [0x01], to: [0x00] }, //Disable Homing Turret knockback
    { offset: 0x005AF812, from: [0x01], to: [0x00] }, //Disable Rocket Turret knockback

    //CamoPresets
    {
        offset: 0x00615EE8,
        from: [0xB8, 0x1E, 0x05, 0x3E, 0xEC, 0x51, 0x38, 0x3E, 0x5C, 0x8F, 0xC2, 0x3E, 0x00, 0x00, 0x80, 0x3F, 0xE3, 0x0B, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x23, 0x2F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x82, 0x1B, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x85, 0xEB, 0x3E, 0xEC, 0x51, 0xB8, 0x3E, 0x29, 0x5C, 0x8F, 0x3E],
          to: [0xCD, 0xCC, 0xCC, 0x3D, 0xCD, 0xCC, 0xCC, 0x3D, 0xCD, 0xCC, 0xCC, 0x3D, 0x00, 0x00, 0x80, 0x3F, 0xE3, 0x0B, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x23, 0x2F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x82, 0x1B, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80, 0x3F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]
    }, //Night Pools To Torch Prime
    {
        offset: 0x00616356,
        from: [0x14, 0xAE, 0x47, 0x3F, 0xCD, 0xCC, 0x4C, 0x3E, 0xCD, 0xCC, 0x4C, 0x3E, 0x00, 0x00, 0x80, 0x3F, 0xE3, 0x0B, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x23, 0x2F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x82, 0x1B, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xCD, 0xCC, 0x0C, 0x3F, 0x66, 0x66, 0x26, 0x3F, 0x00, 0x00, 0x40, 0x3F],
          to: [0xCD, 0xCC, 0x4C, 0x3D, 0xCD, 0xCC, 0x4C, 0x3D, 0xCD, 0xCC, 0x4C, 0x3D, 0x00, 0x00, 0x80, 0x3F, 0xE3, 0x0B, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x23, 0x2F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x82, 0x1B, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xCD, 0xCC, 0xCC, 0x3E, 0x00, 0x00, 0x00, 0x00, 0xCD, 0xCC, 0x4C, 0x3F]
    }, //Bubblgum Prime to Amethyst Prime

    //Weapons  
    { offset: 0x00682640, from: [0x00, 0x3F], to: [0x80, 0x3F] }, //Change SAARE projectile gravity to 1    
    { offset: 0x006BB870, from: [0xC8], to: [0x4A] }, //Replace Repair Torch fire sounds with Energy Drain sounds
    { offset: 0x006BB904, from: [0xBE], to: [0xC0] }, //Replace Repair Torch 3rd Person fire animations with SMC animations
    { offset: 0x006BB920, from: [0xBD], to: [0xBF] }, //Replace Repair Torch 1st Person fire animations with SMC animations
    { offset: 0x006BE108, from: [0x93], to: [0x8F] }, //Replace Seeker 1st Person Model with HEAT Cannon Model
    { offset: 0x006BE0EC, from: [0x94], to: [0x90] }, //Replace Seeker 3rd Person Model with HEAT Cannon Model
    { offset: 0x006BE192, from: [0x50, 0x42, 0x00, 0x00, 0xA0, 0xC1], to: [0xA0, 0x42, 0x00, 0x00, 0x20, 0xC2] }, //Adjust Seeker projectile spawn location
    { offset: 0x006BE0D0, from: [0xB1], to: [0xB7] }, //Replace Seeker fire animation with EOC fire animation
    { offset: 0x006BEB9D, from: [0x64], to: [0x4B] }, //Replace Slug Rifle recoil animation with SA-Hawkins
    { offset: 0x006BFFBC, from: [0x67], to: [0x4B] }, //Replace Sabot Rifle recoil animation with SA-Hawkins
    { offset: 0x006C13F3, from: [0xB6], to: [0xC7] }, //Change Triseeker firing sound to SAARE sound
    { offset: 0x006C14F7, from: [0x93], to: [0x92] }, //Change Triseeker 1st person mesh to GL
    { offset: 0x006C14DB, from: [0x94], to: [0x92] }, //Change Triseeker 3rd person mesh to GL
    { offset: 0x006C14BF, from: [0xB1], to: [0xAF] }, //Change Triseeker 1st person anim to GL
    { offset: 0x006C14A3, from: [0xB2], to: [0x0B] }, //Change Triseeker 3rd person anim to GL
    { offset: 0x006C146B, from: [0x57], to: [0x5E] }, //Change Triseeker recoil anim to EOC
    { offset: 0x006C1557, from: [0xAE, 0x2D], to: [0xE5, 0x2C] }, //Change Triseeker projectile to HE Charge


    //Mech Properties 
    { offset: 0x006550CA, from: [0x04], to: [0x0B] }, //Enable Turret Mode
    { offset: 0x00655D03, from: [0x04], to: [0x0B] }, //Enable item usage in Turret Mode
    { offset: 0x00592315, from: [0x04], to: [0x0B] }, //Enable cycle to next item in Turret Mode
    { offset: 0x005924CF, from: [0x04], to: [0x0B] }, //Enable cycle to prev item in Turret Mode
    { offset: 0x0066A75B, from: [0x66, 0x66, 0xE6, 0x3F], to: [0x00, 0x00, 0x00, 0x00] }, //Remove iframes from turret mode transformation
    { offset: 0x0066A777, from: [0x00, 0x00, 0xC0, 0x3F], to: [0x7B, 0x14, 0x6E, 0x3F] }, //Increase HeavyModeEndTime transformation speed to 0.93s
    { offset: 0x0066A7AF, from: [0x00, 0x00, 0x40, 0x40], to: [0x7B, 0x14, 0x6E, 0x3F] }, //Increase HeavyModeStartTime transformation speed to 0.93s
    { offset: 0x0066A793, from: [0x80, 0x3E], to: [0x57, 0x99], }, //Increase Turret Mode rotation speed from 16000 to 22425 
    { offset: 0x00669197, from: [0x00, 0x00, 0x48, 0x43], to: [0x00, 0xC0, 0x1E, 0x44] }, //Increase base turret mode speed from 200 to 635
    { offset: 0x006690B7, from: [0x00, 0x00, 0xAF, 0x43], to: [0x00, 0x00, 0x16, 0x44] }, //Increase R_Pawn ThrusterVerticalSpeed to 700
    { offset: 0x0066AD9F, from: [0x00, 0x00, 0xD2, 0x43], to: [0x00, 0x80, 0x9D, 0x44] }, //Increase R_Pawn AccelRate to 1260
    { offset: 0x0065A7CF, from: [0x00, 0x00, 0x80, 0x3F], to: [0xCD, 0xCC, 0x4C, 0x3E] }, //Reduce End Repair time to 0.2s
    { offset: 0x0065A7E9, from: [0x00, 0x00, 0x80, 0x3F], to: [0xCD, 0xCC, 0x4C, 0x3E] }, //Reduce End Repair camera time to 0.2s
    { offset: 0x0066A9CF, from: [0x00, 0x00, 0xA0, 0x42, 0x00, 0x00, 0x48, 0x42, 0x00, 0x00, 0x48, 0xC2], to: [0x00, 0x00, 0x20, 0x42, 0x00, 0x00, 0xA0, 0x42, 0x00, 0x00, 0xF0, 0xC2] }, //Adjust Repair camera position
    
    { offset: 0x00656574, from: [0x9B, 0x38, 0x3A, 0x01, 0xE4, 0xFE, 0xFF, 0xFF, 0x38, 0x3A, 0x24, 0x01], to: [0x9A, 0x38, 0x3A, 0x01, 0xE1, 0x19, 0x00, 0x00, 0x38, 0x3A, 0x24, 0x0B] }, //Disables Physics check in R_Pawn.Dodge
    { offset: 0x0059C707, from: [0x03], to: [0x0B] }, //Movestate 3 to 11 
    { offset: 0x0059C725, from: [0x0A], to: [0x0B] }, //Movestate 10 to 11
    { offset: 0x0059C73C, from: [0xE4, 0xFE, 0xFF, 0xFF, 0x38, 0x3A, 0x24, 0x02], to: [0xE1, 0x19, 0x00, 0x00, 0x38, 0x3A, 0x24, 0x0B] }, //Disable Physics check in R_PlayerController.PlayerWalking.ProcessMove
    //These combined edits enable air dodging
    //Bug with boost jumping that rapidly consumes fuel
    //Ignoring changes at 0x0059C707 makes it more playable, but still occurs occasionally.
    //Fixed properly with UPKUtils patch R_Pawn.PerformDodge

    { 
	offset: 0x006386F0, 
	from: [0xF5, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6D, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x44, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x10, 0x00, 0x00, 0x00, 0x88, 0x01, 0x00, 0x00, 0x74, 0x01, 0x00, 0x00, 0x5C, 0x01, 0x00, 0x00, 0x8C, 0x01, 0x00, 0x00, 0x60, 0x01, 0x00, 0x00, 0x84, 0x01, 0x00, 0x00, 0x7C, 0x01, 0x00, 0x00, 0x78, 0x01, 0x00, 0x00, 0x50, 0x01, 0x00, 0x00, 0x64, 0x01, 0x00, 0x00, 0x68, 0x01, 0x00, 0x00, 0x80, 0x01, 0x00, 0x00, 0x54, 0x01, 0x00, 0x00, 0x70, 0x01, 0x00, 0x00, 0x58, 0x01, 0x00, 0x00, 0x6C, 0x01, 0x00, 0x00, 0xF2, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6D, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, 0x00, 0x00, 0x00, 0x4C, 0x01, 0x00, 0x00, 0x3C, 0x01, 0x00, 0x00, 0x44, 0x01, 0x00, 0x00, 0x48, 0x01, 0x00, 0x00, 0x34, 0x01, 0x00, 0x00, 0x38, 0x01, 0x00, 0x00, 0x40, 0x01, 0x00, 0x00, 0xEE, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6D, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x05, 0x00, 0x00, 0x00, 0xDC, 0x00, 0x00, 0x00, 0xE0, 0x00, 0x00, 0x00, 0xE8, 0x00, 0x00, 0x00, 0xEC, 0x00, 0x00, 0x00, 0xE4, 0x00, 0x00, 0x00, 0xF0, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6D, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x05, 0x00, 0x00, 0x00, 0x04, 0x01, 0x00, 0x00, 0x14, 0x01, 0x00, 0x00, 0x0C, 0x01, 0x00, 0x00, 0x08, 0x01, 0x00, 0x00, 0x10, 0x01, 0x00, 0x00, 0x2B, 0x21, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00], 
	to:   [0xF5, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6D, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xF2, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6D, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x38, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0D, 0x00, 0x00, 0x00, 0x4C, 0x01, 0x00, 0x00, 0x3C, 0x01, 0x00, 0x00, 0x44, 0x01, 0x00, 0x00, 0x48, 0x01, 0x00, 0x00, 0x34, 0x01, 0x00, 0x00, 0x38, 0x01, 0x00, 0x00, 0x40, 0x01, 0x00, 0x00, 0x88, 0x01, 0x00, 0x00, 0x74, 0x01, 0x00, 0x00, 0x5C, 0x01, 0x00, 0x00, 0x8C, 0x01, 0x00, 0x00, 0x60, 0x01, 0x00, 0x00, 0x6C, 0x01, 0x00, 0x00, 0xEE, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6D, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0A, 0x00, 0x00, 0x00, 0xDC, 0x00, 0x00, 0x00, 0xE0, 0x00, 0x00, 0x00, 0xE8, 0x00, 0x00, 0x00, 0xEC, 0x00, 0x00, 0x00, 0xE4, 0x00, 0x00, 0x00, 0x50, 0x01, 0x00, 0x00, 0x80, 0x01, 0x00, 0x00, 0x54, 0x01, 0x00, 0x00, 0x70, 0x01, 0x00, 0x00, 0x58, 0x01, 0x00, 0x00, 0xF0, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x6D, 0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0A, 0x00, 0x00, 0x00, 0x04, 0x01, 0x00, 0x00, 0x14, 0x01, 0x00, 0x00, 0x0C, 0x01, 0x00, 0x00, 0x08, 0x01, 0x00, 0x00, 0x10, 0x01, 0x00, 0x00, 0x84, 0x01, 0x00, 0x00, 0x7C, 0x01, 0x00, 0x00, 0x78, 0x01, 0x00, 0x00, 0x64, 0x01, 0x00, 0x00, 0x68, 0x01, 0x00, 0x00, 0x2B, 0x21, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00] 
    }, //Enables hybrid special internals

    //Audio
    { offset: 0x05DEFDDC, from: [0x3F], to: [0x00] }, //Change Hellfires min SoundNodeDelay to 0 //These fix the sounds playing twice on firing the Seeker
    { offset: 0x05DEFDF8, from: [0x3F], to: [0x00] }, //Change Hellfires max SoundNodeDelay to 0 //Alternatively, could choose another firing sound.
    
    //Animations    
    { offset: 0x016AA27A, from: [0x44, 0x44, 0xC4, 0x3F], to: [0x8F, 0xC2, 0x75, 0x3F] }, //Increase HeavyModeEndTime animation speed to 0.96s  
    { offset: 0x0157FB93, from: [0xCD, 0xCC, 0x4C, 0x40], to: [0xD7, 0xA3, 0x90, 0x3F] }, //Increase HeavyModeStartTime animation speed to 1.13s
    { offset: 0x017A886A, from: [0xCD, 0xCC, 0x4C, 0x40], to: [0xD7, 0xA3, 0x90, 0x3F] }, //Increase ShieldMode_FPS animation speed to 1.13s
    
    { offset: 0x018872A8, from: [0xDE, 0xDD, 0xAD, 0x40], to: [0x00, 0x00, 0x20, 0x40] }, //Increase Grenade Launcher animation to 2.5s
    { offset: 0x018972C0, from: [0x22, 0x22, 0x92, 0x40], to: [0x00, 0x00, 0x50, 0x40] }, //Increase Hellfires animation to 3.25s
    { offset: 0x018DCC58, from: [0xDE, 0xDD, 0xAD, 0x40], to: [0x00, 0x00, 0x20, 0x40] }, //Increase TOW animation to 2.5s  
    { offset: 0x018F75E2, from: [0x11, 0x11, 0xA1, 0x40], to: [0x00, 0x00, 0x40, 0x40] }, //Increase Sabot Rifle animation to 3s    
    { offset: 0x018F9D2E, from: [0x11, 0x11, 0xA1, 0x40], to: [0x00, 0x00, 0x40, 0x40] }, //Increase SAARE animation to 3s

    //Other
    { offset: 0x005C7463, from: [0x10], to: [0x18] }, //Increase GameSettingsCommon MaxPlayers to 24
    { offset: 0x005C747F, from: [0x10], to: [0x18] }  //Increase GameSettingsCommon NumPublicConnections to 24
];

module.exports = { relativePath, replacements, baseFileSizeInBytes, decompressedFileSizeInBytes };