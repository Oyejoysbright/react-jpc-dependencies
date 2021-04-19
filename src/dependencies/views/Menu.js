import React, { useState } from 'react';

const availClassnames = {
    container: "",
    menuContainer: "",
    parent:"",
    parentActive: "",
    child: "",
    menuChild: "",
    childActive: "",
    leftIcon: "",
    label: "",
    rightIcon: "",
    children: "",
    menuChildren: "",
    collapseIcon: ""
}

function Menu({data = [], classNames = availClassnames, onParentClick, onChildClick, collapseIcon = []}) {

    if (!data[0]) {
        throw new Error("Data prop cannot be be empty, null or undefined; reconsider the props you used.");
    }
    if (!data[0].id) {
        throw new Error("ID not found in the data supplied. reconsider the props you used.");
    }

    const[state, setState] = useState({mainActive: data[0].id, subActive: data[0].id+""+1, currentIcon: collapseIcon[0], childrenShowing: data[0].id});

    const handleParentClick = (parent) => {
        setState(prev => {return {...prev, mainActive: parent.id, subActive: parent.id+""+1, childrenShowing: parent.id, currentIcon: collapseIcon[0]}});
        
        if (onParentClick) {
            onParentClick(parent);            
        }
    }

    const handleChildClick = (child, parentId, index) => {
        setState(prev => {return {...prev, subActive: (parentId + "" +child.id), mainActive: parentId}});

        if (onChildClick) {
            onChildClick(child, parentId, index);            
        }
    }

    const handleCollapseIconClick = (parent) => {
        if ((state.childrenShowing === parent.id) && (state.currentIcon === collapseIcon[1])) {
            //Collapse children
            setState(prev => {return {...prev, childrenShowing: parent.id, currentIcon: collapseIcon[0]}});
        } else {
            //Show children
            setState(prev => {return {...prev, childrenShowing: parent.id, currentIcon: collapseIcon[1]}});            
        }
    }

    return (
        <ul className={classNames.children}>
            {
                data.map(item => (
                    <li className={classNames.child} key={item.id}>
                        <div className={classNames.menuContainer} >
                            <div className={(state.mainActive === item.id)?classNames.parent+" "+classNames.parentActive : classNames.parent} style={{...styles.main}} >
                                <span onClick={() => handleParentClick(item)} className={classNames.leftIcon}>{item.icon}</span>
                                <span title={item.name} onClick={() => handleParentClick(item)} className={classNames.label} style={styles.label} >{item.name}</span>
                                <span title={state.childrenShowing === item.id?"Collapse":"Expand"} className={classNames.rightIcon}>{Array.isArray(item.children)? <span style={styles.collapseIcon} onClick={() => handleCollapseIconClick(item)} className={classNames.collapseIcon}>{state.childrenShowing === item.id? collapseIcon[1] : collapseIcon[0]} </span> : null}</span>
                            </div>
                            {
                                Array.isArray(item.children) && state.childrenShowing === item.id?
                                    <ul className={classNames.menuChildren} style={styles.children}>
                                        {
                                            item.children.map((subitem, index) => (
                                                <li className={(state.subActive === (item.id+""+subitem.id))?classNames.child+" "+classNames.childActive : classNames.child} style={styles.child} key={index} onClick={() => handleChildClick(subitem, item.id, index)} >{subitem.name}</li>
                                            ))
                                        }
                                    </ul> : null
                            }
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}

export default Menu


const styles = {
    main: {
        display: "flex",
        alignItems: "center",
        paddingLeft: "20px",
        paddingRight: "15px",
        width: "100%",
        height: "50px",
        boxSizing: "border-box",
        cursor: "pointer",
        justifyContent: 'space-around',
    },
    label: {
        display: 'inline-block',
        width: '100%',
        marginLeft: "11.5px",
        fontSize: 'large',
    },
    children: {
        listStyle: "none",
        textIndent: "15px",
        backgroundColor: 'var(--mainColorLite)',
        paddingTop: "10px",
        paddingBottom: "10px",
    },
    child: {
        marginBottom: "15px",
        cursor: 'pointer',
    },
    collapseIcon: {
        transition: "ease-in-out .1s",
    }
}
