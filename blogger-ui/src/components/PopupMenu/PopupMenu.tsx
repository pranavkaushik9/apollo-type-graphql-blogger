import React from 'react';
import { Button, Menu, MenuItem } from '@material-ui/core';

import { ActionItem, ActionItems } from '../../types';

interface PopupMenuProps {
    buttonText: string;
    menuItems: ActionItems;
    onMenuItemClick: (menuItemId: string) => void
}

export const PopupMenu = ({ buttonText, menuItems, onMenuItemClick }: PopupMenuProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (menuItemId: string) => {
        setAnchorEl(null);
        onMenuItemClick(menuItemId);
    };

    return (
        <>
            <Button onClick={handleClick} color="secondary">
                {buttonText}
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {
                    menuItems.map(({ text, id}: ActionItem) => <MenuItem key={`usermenu-${id}`} onClick={() => handleClose(id)}>{text}</MenuItem>)
                }
            </Menu>
        </>
    )
};
