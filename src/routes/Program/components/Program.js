import React, { Component } from "react";
import { Image, TouchableOpacity } from "react-native";
import { Container, Content, Button, Text, View, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon, Item } from 'native-base';
import HeaderComponent from '../../../components/HeaderComponent';
import Main from './Main'
import Styles from './ProgramStyles'


const imagesx = {
    erkek: {
        xs: {
            index: require(`../../../util/erkek/xs.png`),
            Pan: require(`../../../util/erkek/xsPan.png`),
            Pan1: require(`../../../util/erkek/xsPan1.png`),
            Gom: require(`../../../util/erkek/xsGom.png`),
            Gom1: require(`../../../util/erkek/xsGom1.png`)

        },
        s: {
            index: require(`../../../util/erkek/s.png`),
            Pan: require(`../../../util/erkek/sPan.png`),
            Pan1: require(`../../../util/erkek/sPan1.png`),
            Gom: require(`../../../util/erkek/sGom.png`),
            Gom1: require(`../../../util/erkek/sGom1.png`)

        },
        m: {
            index: require(`../../../util/erkek/m.png`),
            Pan: require(`../../../util/erkek/mPan.png`),
            Pan1: require(`../../../util/erkek/mPan1.png`),
            Gom: require(`../../../util/erkek/mGom.png`),
            Gom1: require(`../../../util/erkek/mGom1.png`)

        },
        l: {
            index: require(`../../../util/erkek/l.png`),
            Pan: require(`../../../util/erkek/lPan.png`),
            Pan1: require(`../../../util/erkek/lPan1.png`),
            Gom: require(`../../../util/erkek/lGom.png`),
            Gom1: require(`../../../util/erkek/lGom1.png`)

        },
        xl: {
            index: require(`../../../util/erkek/xl.png`),
            Pan: require(`../../../util/erkek/xlPan.png`),
            Pan1: require(`../../../util/erkek/xlPan1.png`),
            Gom: require(`../../../util/erkek/xlGom.png`),
            Gom1: require(`../../../util/erkek/xlGom1.png`)

        }
    },
    kadın: {
        xs: {
            index: require(`../../../util/kadin/xs.png`),
            Pan: require(`../../../util/kadin/xsPan.png`),
            Pan1: require(`../../../util/kadin/xsPan1.png`),
            Gom: require(`../../../util/kadin/xsGom.png`),
            Gom1: require(`../../../util/kadin/xsGom1.png`),
            El: require(`../../../util/kadin/xsEl.png`),
            El1: require(`../../../util/kadin/xsEl1.png`)

        },
        s: {
            index: require(`../../../util/kadin/s.png`),
            Pan: require(`../../../util/kadin/sPan.png`),
            Pan1: require(`../../../util/kadin/sPan1.png`),
            Gom: require(`../../../util/kadin/sGom.png`),
            Gom1: require(`../../../util/kadin/sGom1.png`),
            El: require(`../../../util/kadin/sEl.png`),
            El1: require(`../../../util/kadin/sEl1.png`)

        },
        m: {
            index: require(`../../../util/kadin/m.png`),
            Pan: require(`../../../util/kadin/mPan.png`),
            Pan1: require(`../../../util/kadin/mPan1.png`),
            Gom: require(`../../../util/kadin/mGom.png`),
            Gom1: require(`../../../util/kadin/mGom1.png`),
            El: require(`../../../util/kadin/mEl.png`),
            El1: require(`../../../util/kadin/mEl1.png`)

        },
        l: {
            index: require(`../../../util/kadin/l.png`),
            Pan: require(`../../../util/kadin/lPan.png`),
            Pan1: require(`../../../util/kadin/lPan1.png`),
            Gom: require(`../../../util/kadin/lGom.png`),
            Gom1: require(`../../../util/kadin/lGom1.png`),
            El: require(`../../../util/kadin/lEl.png`),
            El1: require(`../../../util/kadin/lEl1.png`)

        },
        xl: {
            index: require(`../../../util/kadin/xl.png`),
            Pan: require(`../../../util/kadin/xlPan.png`),
            Pan1: require(`../../../util/kadin/xlPan1.png`),
            Gom: require(`../../../util/kadin/xlGom.png`),
            Gom1: require(`../../../util/kadin/xlGom1.png`),
            El: require(`../../../util/kadin/xlEl.png`),
            El1: require(`../../../util/kadin/xlEl1.png`)

        }
    },
    kiyafet: {
        eGom: require(`../../../util/kiyafet/eGom.png`),
        eGom1: require(`../../../util/kiyafet/eGom1.png`),
        ePan: require(`../../../util/kiyafet/ePan.png`),
        ePan1: require(`../../../util/kiyafet/ePan1.png`),
        kEl: require(`../../../util/kiyafet/kEl.png`),
        kEl1: require(`../../../util/kiyafet/kEl1.png`),
        kGom: require(`../../../util/kiyafet/kGom.png`),
        kGom1: require(`../../../util/kiyafet/kGom1.png`),
        kPan: require(`../../../util/kiyafet/kPan.png`),
        kPan1: require(`../../../util/kiyafet/kPan1.png`)
    }
}

export default class Program extends Component {
    constructor(props) {
        super(props);
        this.state = { result: {}, cloths: '' }
        this.uri = '';
        this.img1 = imagesx.kiyafet.eGom;
        this.img2 = imagesx.kiyafet.eGom1;
        this.img3 = imagesx.kiyafet.ePan;
        this.img4 = imagesx.kiyafet.ePan1;
        this.img5 = imagesx.kiyafet.kEl;
        this.img6 = imagesx.kiyafet.kEl1;
    }
    componentWillMount() {
        this.setState({ result: this.props.result })
    }
    render() {
        if (this.state.result.cinsiyet === 'erkek') {
            this.img1 = imagesx.kiyafet.eGom;
            this.img2 = imagesx.kiyafet.eGom1;
            this.img3 = imagesx.kiyafet.ePan;
            this.img4 = imagesx.kiyafet.ePan1;
            if (this.state.result.beden === 'xs') {
                if (this.state.cloths === '') {
                    this.uri = imagesx.erkek.xs.index;
                } else if (this.state.cloths === 'pan') {
                    this.uri = imagesx.erkek.xs.Pan
                } else if (this.state.cloths === 'pan1') {
                    this.uri = imagesx.erkek.xs.Pan1;
                } else if (this.state.cloths === 'gom') {
                    this.uri = imagesx.erkek.xs.Gom;
                } else if (this.state.cloths === 'gom1') {
                    this.uri = imagesx.erkek.xs.Gom1;
                }
            } else if (this.state.result.beden === 's') {
                if (this.state.cloths === '') {
                    this.uri = imagesx.erkek.s.index;
                } else if (this.state.cloths === 'pan') {
                    this.uri = imagesx.erkek.s.Pan
                } else if (this.state.cloths === 'pan1') {
                    this.uri = imagesx.erkek.s.Pan1;
                } else if (this.state.cloths === 'gom') {
                    this.uri = imagesx.erkek.s.Gom;
                } else if (this.state.cloths === 'gom1') {
                    this.uri = imagesx.erkek.s.Gom1;
                }
            } else if (this.state.result.beden === 'm') {
                if (this.state.cloths === '') {
                    this.uri = imagesx.erkek.m.index;
                } else if (this.state.cloths === 'pan') {
                    this.uri = imagesx.erkek.m.Pan
                } else if (this.state.cloths === 'pan1') {
                    this.uri = imagesx.erkek.m.Pan1;
                } else if (this.state.cloths === 'gom') {
                    this.uri = imagesx.erkek.m.Gom;
                } else if (this.state.cloths === 'gom1') {
                    this.uri = imagesx.erkek.m.Gom1;
                }
            } else if (this.state.result.beden === 'l') {
                if (this.state.cloths === '') {
                    this.uri = imagesx.erkek.l.index;
                } else if (this.state.cloths === 'pan') {
                    this.uri = imagesx.erkek.l.Pan
                } else if (this.state.cloths === 'pan1') {
                    this.uri = imagesx.erkek.l.Pan1;
                } else if (this.state.cloths === 'gom') {
                    this.uri = imagesx.erkek.l.Gom;
                } else if (this.state.cloths === 'gom1') {
                    this.uri = imagesx.erkek.l.Gom1;
                }
            } else if (this.state.result.beden === 'xl') {
                if (this.state.cloths === '') {
                    this.uri = imagesx.erkek.xl.index;
                } else if (this.state.cloths === 'pan') {
                    this.uri = imagesx.erkek.xl.Pan
                } else if (this.state.cloths === 'pan1') {
                    this.uri = imagesx.erkek.xl.Pan1;
                } else if (this.state.cloths === 'gom') {
                    this.uri = imagesx.erkek.xl.Gom;
                } else if (this.state.cloths === 'gom1') {
                    this.uri = imagesx.erkek.xl.Gom1;
                }
            }
        } else if (this.state.result.cinsiyet === 'kadın') {
            this.img1 = imagesx.kiyafet.kGom;
            this.img2 = imagesx.kiyafet.kGom1;
            this.img3 = imagesx.kiyafet.kPan;
            this.img4 = imagesx.kiyafet.kPan1;
            if (this.state.result.beden === 'xs') {
                if (this.state.cloths === '') {
                    this.uri = imagesx.kadın.xs.index;
                } else if (this.state.cloths === 'pan') {
                    this.uri = imagesx.kadın.xs.Pan
                } else if (this.state.cloths === 'pan1') {
                    this.uri = imagesx.kadın.xs.Pan1;
                } else if (this.state.cloths === 'gom') {
                    this.uri = imagesx.kadın.xs.Gom;
                } else if (this.state.cloths === 'gom1') {
                    this.uri = imagesx.kadın.xs.Gom1;
                } else if (this.state.cloths === 'el') {
                    this.uri = imagesx.kadın.xs.El;
                } else if (this.state.cloths === 'el1') {
                    this.uri = imagesx.kadın.xs.El1;
                }
            } else if (this.state.result.beden === 's') {
                if (this.state.cloths === '') {
                    this.uri = imagesx.kadın.s.index;
                } else if (this.state.cloths === 'pan') {
                    this.uri = imagesx.kadın.s.Pan
                } else if (this.state.cloths === 'pan1') {
                    this.uri = imagesx.kadın.s.Pan1;
                } else if (this.state.cloths === 'gom') {
                    this.uri = imagesx.kadın.s.Gom;
                } else if (this.state.cloths === 'gom1') {
                    this.uri = imagesx.kadın.s.Gom1;
                } else if (this.state.cloths === 'el') {
                    this.uri = imagesx.kadın.s.El;
                } else if (this.state.cloths === 'el1') {
                    this.uri = imagesx.kadın.s.El1;
                }
            } else if (this.state.result.beden === 'm') {
                if (this.state.cloths === '') {
                    this.uri = imagesx.kadın.m.index;
                } else if (this.state.cloths === 'pan') {
                    this.uri = imagesx.kadın.m.Pan
                } else if (this.state.cloths === 'pan1') {
                    this.uri = imagesx.kadın.m.Pan1;
                } else if (this.state.cloths === 'gom') {
                    this.uri = imagesx.kadın.m.Gom;
                } else if (this.state.cloths === 'gom1') {
                    this.uri = imagesx.kadın.m.Gom1;
                } else if (this.state.cloths === 'el') {
                    this.uri = imagesx.kadın.m.El;
                } else if (this.state.cloths === 'el1') {
                    this.uri = imagesx.kadın.m.El1;
                }
            } else if (this.state.result.beden === 'l') {
                if (this.state.cloths === '') {
                    this.uri = imagesx.kadın.l.index;
                } else if (this.state.cloths === 'pan') {
                    this.uri = imagesx.kadın.l.Pan
                } else if (this.state.cloths === 'pan1') {
                    this.uri = imagesx.kadın.l.Pan1;
                } else if (this.state.cloths === 'gom') {
                    this.uri = imagesx.kadın.l.Gom;
                } else if (this.state.cloths === 'gom1') {
                    this.uri = imagesx.kadın.l.Gom1;
                } else if (this.state.cloths === 'el') {
                    this.uri = imagesx.kadın.l.El;
                } else if (this.state.cloths === 'el1') {
                    this.uri = imagesx.kadın.l.El1;
                }
            } else if (this.state.result.beden === 'xl') {
                if (this.state.cloths === '') {
                    this.uri = imagesx.kadın.xl.index;
                } else if (this.state.cloths === 'pan') {
                    this.uri = imagesx.kadın.xl.Pan
                } else if (this.state.cloths === 'pan1') {
                    this.uri = imagesx.kadın.xl.Pan1;
                } else if (this.state.cloths === 'gom') {
                    this.uri = imagesx.kadın.xl.Gom;
                } else if (this.state.cloths === 'gom1') {
                    this.uri = imagesx.kadın.xl.Gom1;
                } else if (this.state.cloths === 'el') {
                    this.uri = imagesx.kadın.xl.El;
                } else if (this.state.cloths === 'el1') {
                    this.uri = imagesx.kadın.xl.El1;
                }
            }
        }
        return (
            <Container>
                <HeaderComponent navigation={this.props.navigation} back={this.state.result.beden} />
                <Content>
                    {
                        this.state.result.cinsiyet !== undefined &&
                        <Main src={this.uri} />
                        ||
                        <Main src={require(`../../../util/erkek/l.png`)} />
                    }
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <View style={Styles.textImage}>
                                <Text style={{ color: 'white' }}>Gömlek</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => { this.setState({ cloths: 'gom' }) }} style={Styles.button}>
                                <Image source={this.img1} style={Styles.image} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, marginLeft: 1 }}>
                            <View style={Styles.textImage}>
                                <Text style={{ color: 'white' }}>Gömlek 2</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => { this.setState({ cloths: 'gom1' }) }} style={Styles.button}>
                                <Image source={this.img2} style={Styles.image} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, marginLeft: 1 }}>
                            <View style={Styles.textImage}>
                                <Text style={{ color: 'white' }}>Pantolon</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => { this.setState({ cloths: 'pan' }) }} style={Styles.button}>
                                <Image source={this.img3} style={Styles.image} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, marginLeft: 1 }}>
                            <View style={Styles.textImage}>
                                <Text style={{ color: 'white' }}>Pantolon 2</Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => { this.setState({ cloths: 'pan1' }) }} style={Styles.button}>
                                <Image source={this.img4} style={Styles.image} />
                            </TouchableOpacity>
                        </View>
                        {
                            this.state.result.cinsiyet === 'kadın' &&
                            <View style={{ flex: 2, flexDirection: 'row' }}>
                                <View style={{ flex: 1, marginLeft: 1 }}>
                                    <View style={Styles.textImage}>
                                        <Text style={{ color: 'white' }}>Elbise</Text>
                                    </View>
                                    <TouchableOpacity activeOpacity={0.8} onPress={() => { this.setState({ cloths: 'el' }) }} style={Styles.button}>
                                        <Image source={this.img5} style={Styles.image} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flex: 1, marginLeft: 1 }}>
                                    <View style={Styles.textImage}>
                                        <Text style={{ color: 'white' }}>Elbise 2</Text>
                                    </View>
                                    <TouchableOpacity activeOpacity={0.8} onPress={() => { this.setState({ cloths: 'el1' }) }} style={Styles.button}>
                                        <Image source={this.img6} style={Styles.image} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        }
                    </View>
                </Content>
            </Container>
        )
    }
}