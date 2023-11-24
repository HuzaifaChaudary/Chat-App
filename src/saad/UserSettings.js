// UserSettings.js
import React from 'react';
import BeAlistener from '../components/ContainerScreens/BeAlistener';
import MainUserSettingOption from '../components/ContainerScreens/MainUserSettingOption';

export default function UserSettings({ open }) {
    return open ? (
        <MainUserSettingOption open={open}/>
    ) : null;
}
