// UserSettings.js
import React from 'react';
import BeAlistener from '../components/ContainerScreens/User/BeAlistener';
import MainUserSettingOption from '../components/ContainerScreens/User/MainUserSettingOption';
import MainListenerSettingOption from '../components/ContainerScreens/Listener/MainListenerSettingOption';

export default function UserSettings({ open,setOpen }) {
    return open ? (
        <MainUserSettingOption setOpen={setOpen} open={open}/>
    ) : null;
}
