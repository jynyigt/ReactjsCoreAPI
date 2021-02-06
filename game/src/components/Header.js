import React, {Component} from 'react';
import {Container, Image, Menu, Visibility} from "semantic-ui-react";
import {Link,NavLink} from "react-router-dom";
class Header extends Component {
    state = {
        menuFixed: null,
        overlayFixed: null,
    };

    stickTopMenu = () => this.setState({ menuFixed: true })

    unStickTopMenu = () => this.setState({ menuFixed: null })
    render() {
        const { menuFixed } = this.state
        return (
            <div>
                <Visibility
                    onBottomPassed={this.stickTopMenu}
                    onBottomVisible={this.unStickTopMenu}
                    once={false}
                >
                    <Menu
                        borderless
                        fixed={menuFixed && 'top'}

                    >
                        <Container text>
                            <Menu.Item as={Link} to="/" exact="true">
                                <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
                            <Menu.Item header>Film Eşleştirme</Menu.Item>
                        </Menu.Item>
                            <Menu.Item as={NavLink} to="/movies">
                                Filmler
                            </Menu.Item>
                            <Menu.Item as='a'>Film Ekleme</Menu.Item>

                        </Container>
                    </Menu>
                </Visibility>
            </div>
        );
    }
}

export default Header;