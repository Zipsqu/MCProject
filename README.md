# MC Project — Modpack
https://zipsqu.github.io/MCProject/

## 🏰 New Player Kingdom Setup

Follow these steps whenever a new player joins the server and needs their own kingdom.

### 1. Add the player to the whitelist
Run in the server console:

```
whitelist add <player>
```

### 2. Remove the placeholder server kingdom
Remove the player's assigned placeholder kingdom using the appropriate FTB Teams server-team command:

```
/ftbteams server delete <kingdom>
```

### 3. Create the player's kingdom
Create a new **FTB Teams party team** for the kingdom. Do not create a server-owned team; players cannot join server-owned teams.

```
/ftbteams party create
/ftbteams party settings_for <team> ftbteams:display_name "<name>"

```

### 4. Assign a colour to the kingdom
Open the FTB Teams party settings and select the kingdom's designated colour.

```
/ftbteams party settings_for <team> ftbteams:color <colour>
```

### 5. Assign claims to the kingdom
1. Open the FTB Chunks map GUI.
2. Enable **Admin Mode**.
3. Claim the designated chunks for the new kingdom.
4. Verify that the claims belong to the intended party.

### 6. Add the new player to the kingdom
Use the supported FTB Teams admin command:

```
/ftbteams force-add <team> <player>
```

### 7. Transfer kingdom ownership
Use the FTB Teams party ownership-transfer option to make the new player the kingdom owner.

```
/ftbteams party transfer_ownership_for <team> <player>
```

### 8. Leave the kingdom
Once the new player is the owner and remains a member, leave the party using the party GUI or the appropriate leave command.

```
/ftbteams party leave
```

**Final verification checklist**
- [ ] Player is whitelisted.
- [ ] Placeholder server kingdom has been handled.
- [ ] New player-owned party exists with the correct name.
- [ ] Kingdom colour is set.
- [ ] Claims belong to the correct party.
- [ ] New player is a member and owner.
- [ ] Admin has left the party.
- [ ] BlueMap displays the kingdom and its claims correctly.
