import React, { Component } from 'react'
import Center from '../services/containers/Center'

export class SpecialInput extends Component {
    render() {
        return (
            <form>
                <Center>
                <input name="input" placeholder="Item A"/>
                <input name="input" placeholder="Item B"/>
                </Center>
            </form>
        )
    }
}

export default SpecialInput
