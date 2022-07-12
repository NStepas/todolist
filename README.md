# Getting Started with Create React App

## STARTUP

Install packages - `npm install` | `npm i`

Start project - `npm start`

## CODE STRUCTURE

### Component structure

    import React, { useEffect, useState, useMemo, useCallback } from 'react';
    import lib from 'lib';

    import Component from './Component';
    import services from './services';
    import helper from './helper';
    import hooks from './hooks';

    import constants from './constants';
    import { IDataItem } from './types';
    import icon from './icon.svg';
    import styles from './Style.module.scss';

    interface IProps {
      data: {
        userId: number;
        item: IDataItem;
      }
    }

    const MyComponent = ({ data: { userId, item } }: IProps) => {
        const [values, setValues] = useState([]);

        const dispatch = useDispatch();
        const user = useSelector(state => state.user);

        const valueIds = useMemo(() => values.map(value => value.id), [values]);

        const getData = useCallback(() => {}, []);

        const handleClick = () => {};

        const onMount = async () => {
            await onGetUser(userId);
        };

        useEffect(() => {
            onMount();
        }, []);

        return (
            <div>
                <Component getData={getData} />
                <button type="button" onClick={handleClick}>
                    Click
                </button>
            </div>
        );
    };

    export default MyComponent;

### Project folder/file structure

    services
        api
            auth.js
            user.js
            task.js
            tasks.js
        index.js
        apiService.js

    store
        auth
            actions
                ActionSetAuthState.js
            thunks
                ThunkPostLoginUser.js
                ThunkPostLogoutUser.js
                ThunkGetUserToken.js
            index.js
            selectors.js
        index.js

jsx rootReducer.js

    utils
        dates.js
        logger.js
        ...
    ui
        assets
            fonts
            images
            styles
                app.scss
                colors.scss
                constants.scss
                ...
        components
            common
                Button
                    index.js
                    Button.jsx
                Modal
                ...
            inputs
                Input
                Select
                ...
        configs
        constants
        hooks
        pages
            User
                Devices
                      components
                          Table
                              index.js
                              Table.jsx
                              Table.module.scss
                      index.js
                      UserDevices.jsx
                Notes
            Profile
            ...
        routes
        themes
