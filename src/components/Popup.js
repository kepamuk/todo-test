import React, {memo, useState} from 'react'
import SettingsIcon from "@mui/icons-material/Settings";
import {Popover, Switch} from "@mui/material";

const Popup = memo(function Popup({handleToggleNews, newsShow}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div className='popup'>
      <SettingsIcon aria-describedby={id} className='title__settings' onClick={handleClick}/>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Switch
          checked={newsShow}
          className="settings__block-switch"
          onChange={(e) => handleToggleNews(e)}
        />
      </Popover>
    </div>
  )
})

export default Popup;