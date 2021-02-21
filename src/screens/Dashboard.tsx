import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';
import Calculator from "../components/Calculator";

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
    <Calculator />
);

export default memo(Dashboard);
