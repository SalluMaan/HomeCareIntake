import React from "react";
import { StyleSheet } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createSwitchNavigator } from "react-navigation";
import IconAnt from "react-native-vector-icons/Entypo";
import IconAnt2 from "react-native-vector-icons/AntDesign";
import IconAnt3 from "react-native-vector-icons/MaterialCommunityIcons";
import IconAnt4 from "react-native-vector-icons/MaterialIcons";

import LoginScreen from "./screens/LoginScreen";
import ResetPassword from "./screens/ResetPassword";

import ResetPass from "./screens/ResetPass";
import ResetPassSucc from "./screens/ResetPassSucc";
import Notification01 from "./screens/Notification01";
import Notification02 from "./screens/Notification02";
import Inbox from "./screens/Inbox";
import Search from "./screens/Search";
import ClientSchedule from "./screens/ClientSchedule";
import CarevigerSchedule from "./screens/CarevigerSchedule";
import Newreferrals from "./screens/Newreferrals";
import Schmake from "./screens/Schmake";
import Calander from "./screens/Calander";
import Messagelist from "./screens/Messagelist";
import TotalClients from "./screens/TotalClients";
import TotalClients2 from "./screens/TotalClients2";
import ClientProfile from "./screens/ClientProfile";
import Caregiverdetails from "./screens/Caregiverdetails";
import ViewClientSch from "./screens/ViewClientSch";
import WorkHistory from "./screens/WorkHistory";
import ViewSchedule from "./screens/ViewSchedule";
import EditSchedule from "./screens/EditSchedule";
import EditSchedule2 from "./screens/EditSchedule2";
import RecurringSchedule from "./screens/RecurringSchedule";
import RecurringSchedule2 from "./screens/RecurringSchedule2";
import MCO from "./screens/MCO";
import Myprofile from "./screens/Myprofile";
import Myaccount from "./screens/Myaccount";
import TOS from "./screens/TOS";
import Feedback from "./screens/Feedback";
import ContactUs from "./screens/ContactUs";
import Meetings from "./screens/Meetings";
import ReferralsScreen from "./screens/ReferralsScreen";
import LeadStatus from "./screens/LeadStatus";
import CrmScreen from "./screens/CrmScreen";
import PayrollRate from "./screens/PayrollRate";
import SkillsCert from "./screens/SkillsCert";
import Chat from "./screens/Chat";
import Chat2 from "./screens/Chat2";
import ScheduleDet from "./screens/ScheduleDet";
import Maps from "./screens/Maps";
import EditProfile from "./screens/EditProfile";
import EditProfile2 from "./screens/EditProfile2";
import Assessment from "./screens/Assessment";
import HomeSAst from "./screens/HomeSAst";
import TotalCaregiver from "./screens/TotalCaregiver";
import TotalCaregiver2 from "./screens/TotalCaregiver2";
import SchDetComp from "./screens/SchDetComp";
import HomePage from "./TabsSceens/HomePage";
// import AddNewClient from "./TabsSceens/AddNewClient";
import AddNewCareg from "./TabsSceens/AddNewCareg";
import MangageSch from "./TabsSceens/MangageSch";
import AddSchdeule from "./screens/AddSchdeule";
import AddNewClient from "./components/AddNewClient";
import OTP from "./screens/OTP";
import SliderScreen from "./screens/SliderScreen";
import Logout from "./screens/Logout";
import ReferralsHome from "./screens/ReferralsHome";
import Meetings2 from "./screens/Meetings2";
import AskLogin from "./screens/AskLogin";
import ViewCaregiverSch from "./screens/ViewCaregiverSch";

// =======================careGiver===========================
import LoginCare from "./caregiver/LoginCare";
import FirstScreen from "./caregiver/FirstScreen";
import SignUp from "./caregiver/SignUp";
import CommonLogin from "./caregiver/CommonLogin";
import SignUp2 from "./caregiver/SignUp2";
import SignUp3 from "./caregiver/SignUp3";
import SignUp4 from "./caregiver/SignUp4";
import SignUp5 from "./caregiver/SignUp5";
import AutomaticNoti from "./caregiver/AutomaticNoti";
import AutomaticNoti2 from "./caregiver/AutomaticNoti2";
import HomePage2 from "./caregiver/HomePage2";
import HomePage3 from "./caregiver/HomePage3";
import HomePage4 from "./caregiver/HomePage4";
import SetRemainder from "./caregiver/SetRemainder";
import MyaccountCare from "./caregiver/Myaccount";
import Myaccount2Care from "./caregiver/Myaccount2";
import ViewScheduleCare from "./caregiver/ViewSchedule";
import ScheduleDetCare from "./caregiver/ScheduleDet";
import ScheduleDet2Care from "./caregiver/ScheduleDet2";
import IntakeCoList from "./caregiver/IntakeCoList";
import AccountSettings from "./caregiver/AccountSettings";
import Incident from "./caregiver/Incident";
import Incident2 from "./caregiver/Incident2";
import IntakeCoList2 from "./caregiver/IntakeCoList2";
import ScheduleDet3Care from "./caregiver/ScheduleDet3";
import WorkHistory2Care from "./caregiver/WorkHistory2";
// import Maps from "./caregiver/Maps";
import TestCert1Care from "./caregiver/TestCert1";
import TestCert2Care from "./caregiver/TestCert2";
import TestCert3Care from "./caregiver/TestCert3";
import GeneralFAQ from "./caregiver/GeneralFAQ";
import FeedbackCare from "./caregiver/Feedback";
import CareQuiz from "./caregiver/CareQuiz";
import WeeklySurvery1 from "./caregiver/WeeklySurvery1";
import WeeklySurvery2 from "./caregiver/WeeklySurvery2";
import WeeklySurvery3 from "./caregiver/WeeklySurvery3";
import WeeklySurvery4 from "./caregiver/WeeklySurvery4";
import Thankyou from "./caregiver/Thankyou";
import ResetPasswordCare from "./screens/ResetPasswordCare";
import NotificationCare from "./caregiver/notificationCare";
import OTPCare from "./caregiver/OTPCare";
import ResetPassCare from "./caregiver/ResetPassCare";

const TabNav = createBottomTabNavigator({
  First: {
    screen: HomePage,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <IconAnt2 name="home" size={25} color="#A4A4A4" />
      ),
    },
  },
  Add: {
    screen: AddNewClient,
    navigationOptions: {
      tabBarLabel: "Add Client",
      tabBarIcon: ({ tintColor }) => (
        <IconAnt name="add-user" size={23} color="#A4A4A4" />
      ),
    },
  },

  //   <IconAnt3
  //   name="email-outline"
  //   size={30}
  //   color="#A4A4A4"
  //   style={{ marginTop: 10, marginLeft: 19 }}
  // />

  AddCare: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: "Inbox",
      tabBarIcon: ({ tintColor }) => (
        <IconAnt3 name="email-outline" size={25} color="#A4A4A4" />
      ),
    },
  },
  Manage: {
    screen: MangageSch,
    navigationOptions: {
      tabBarLabel: "Manage Schedule",
      tabBarIcon: ({ tintColor }) => (
        <IconAnt2 name="calendar" size={25} color="#A4A4A4" />
      ),
    },
  },
});

const TabNav2 = createBottomTabNavigator({
  Home2: {
    screen: HomePage2,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <IconAnt2 name="home" size={25} color="#A4A4A4" />
      ),
    },
  },
  Add: {
    screen: AddNewClient,
    navigationOptions: {
      tabBarLabel: "AddClient",
      tabBarIcon: ({ tintColor }) => (
        <IconAnt name="add-user" size={25} color="#A4A4A4" />
      ),
    },
  },
  AddCare: {
    screen: AddNewCareg,
    navigationOptions: {
      tabBarLabel: "AddCarevigor",
      tabBarIcon: ({ tintColor }) => (
        <IconAnt4 name="library-add" size={25} color="#A4A4A4" />
      ),
    },
  },
  Manage: {
    screen: MangageSch,
    navigationOptions: {
      tabBarLabel: "Manage Schedule",
      tabBarIcon: ({ tintColor }) => (
        <IconAnt2 name="calendar" size={25} color="#A4A4A4" />
      ),
    },
  },
});

const FeedStack = createStackNavigator({
  Stack2: {
    screen: TabNav,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },
  Stack3: {
    screen: TabNav2,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },

  Inbox: { screen: Inbox },
  Myaccount: { screen: Myaccount },
  Notification02: { screen: Notification02 },
  Notification01: { screen: Notification01 },
  Search: { screen: Search },
  ClientS: { screen: ClientSchedule },
  CarevigerSch: { screen: CarevigerSchedule },
  NewRef: { screen: Newreferrals },
  Schmake: { screen: Schmake },
  Calander: { screen: Calander },
  MsgList: { screen: Messagelist },
  Chat: { screen: Chat },
  TotalClients: { screen: TotalClients },
  ReferralsScreen: { screen: ReferralsScreen },
  ReferralsHome: { screen: ReferralsHome },
  TotalClients2: { screen: TotalClients2 },
  ClientProfile: { screen: ClientProfile },
  ViewSchedule: { screen: ViewSchedule },
  SchDetComp: { screen: SchDetComp },
  ScheduleDet: { screen: ScheduleDet },
  EditSchedule: { screen: EditSchedule },
  RecurringSchedule: { screen: RecurringSchedule },
  AddSchdeule: { screen: AddSchdeule },
  Chat2: { screen: Chat2 },

  Maps: {
    screen: Maps,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },

  EditProfile: { screen: EditProfile },
  Assessment: { screen: Assessment },
  HomeSAst: { screen: HomeSAst },
  MCO: { screen: MCO },
  WorkHistory: { screen: WorkHistory },
  TotalCaregiver: { screen: TotalCaregiver },
  TotalCaregiver2: { screen: TotalCaregiver2 },
  Caregiverdetails: { screen: Caregiverdetails },
  ViewClientSch: { screen: ViewClientSch },
  ViewCaregiverSch: { screen: ViewCaregiverSch },
  SchDetComp: { screen: SchDetComp },
  EditSchedule2: { screen: EditSchedule2 },
  RecurringSchedule2: { screen: RecurringSchedule2 },
  AddSchdeule2: { screen: AddSchdeule },
  EditProfile2: { screen: EditProfile2 },
  SkillsCert: { screen: SkillsCert },
  PayrollRate: { screen: PayrollRate },
  LeadStatus: { screen: LeadStatus },
  ReferralsScreen: { screen: ReferralsScreen },
  Meetings: { screen: Meetings },
  Meetings2: { screen: Meetings2 },
  TOS: { screen: TOS },
  Myprofile: { screen: Myprofile },
  Feedback: { screen: Feedback },
});

const FeedStack2 = createStackNavigator({
  Stack3: {
    screen: TabNav2,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },

  SetRemainder: { screen: SetRemainder },
  MyaccountCare: { screen: MyaccountCare },
  Myaccount2Care: { screen: Myaccount2Care },
  ViewSchedule: { screen: ViewScheduleCare },
  ScheduleDet: { screen: ScheduleDetCare },
  ScheduleDet2: { screen: ScheduleDet2Care },
  IntakeCoList: { screen: IntakeCoList },
  AccountSettings: { screen: AccountSettings },
  Incident: { screen: Incident },
  Incident2: { screen: Incident2 },
  IntakeCoList2: { screen: IntakeCoList2 },
  ScheduleDet3: { screen: ScheduleDet3Care },
  WorkHistory2: { screen: WorkHistory2Care },
  NotificationCare: { screen: NotificationCare },
  Maps: {
    screen: Maps,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },
  TestCert1: { screen: TestCert1Care },
  TestCert2: { screen: TestCert2Care },
  TestCert3: { screen: TestCert3Care },
  GeneralFAQ: {
    screen: GeneralFAQ,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
    }),
  },
  Feedback: { screen: FeedbackCare },
  CareQuiz: { screen: CareQuiz },
  WeeklySurvery1: { screen: WeeklySurvery1 },
  WeeklySurvery2: { screen: WeeklySurvery2 },
  WeeklySurvery3: { screen: WeeklySurvery3 },
  WeeklySurvery4: { screen: WeeklySurvery4 },
  Thankyou: { screen: Thankyou },
});

const drawNav = createDrawerNavigator({
  First: {
    screen: FeedStack,
    navigationOptions: {
      title: "Home",
    },
  },
  CrmScreen: {
    screen: Meetings,
    navigationOptions: {
      title: "CRM",
    },
  },
  Meetings: {
    screen: Meetings2,
    navigationOptions: {
      title: "Meeting",
    },
  },

  TotalCaregiver2: {
    screen: TotalCaregiver2,
    navigationOptions: {
      title: "All Caregivers",
    },
  },
  TotalClients2: {
    screen: TotalClients2,
    navigationOptions: {
      title: "All Clients",
    },
  },
  ChatAdmin: {
    screen: ContactUs,
    navigationOptions: {
      title: "Chat Admin",
    },
  },
  RequestPayroll: {
    screen: PayrollRate,
    navigationOptions: {
      title: "Request Payroll",
    },
  },

  Myaccount: {
    screen: Myaccount,
    navigationOptions: {
      title: "My Account",
    },
  },
  Logout: {
    screen: Logout,
    navigationOptions: {
      title: "Logout",
    },
  },
  // ReferralsScreen: { screen: ReferralsScreen },
  // SkillsCert: { screen: SkillsCert },
  // SchDetComp: { screen: SchDetComp },

  // LeadStatus: { screen: LeadSt atus },
  // ReferralsScreen: { screen: ReferralsScreen },
  // ViewSchedule: { screen: ViewSchedule },
  // EditSchedule2: { screen: EditSchedule2 },
});

const drawNav2 = createDrawerNavigator({
  First: { screen: FeedStack2 },
  Reminder: { screen: HomePage3 },
  // Reminder2: { screen: HomePage2 },
  // Reminder4: { screen: HomePage4 },
  // Reminder: { screen: HomePage3 },

  // ContactUs: {screen:ContactUs},

  // CrmScreen: {screen:CrmScreen},
});

const switchNav = createSwitchNavigator(
  {
    Slider: {
      screen: SliderScreen,
      navigationOptions: { headerMode: "screen" },
    },
    Login: { screen: LoginScreen },
    First: { screen: drawNav },
    Reset: { screen: ResetPassword },
    ResetPass: { screen: ResetPass },
    OTPcode: { screen: OTP },
    ResetPassSucc: { screen: ResetPassSucc },
    Notification01: { screen: Notification01 },
    AskLogin: { screen: AskLogin },
    Logout: { screen: Logout },

    /////=========Craegiver------------------------
    Firsts: { screen: FirstScreen },
    Reset2: { screen: ResetPasswordCare },
    ResetPassCare: { screen: ResetPassCare },
    OTPcodeCare: { screen: OTPCare },
    SignUp: { screen: SignUp },
    LoginCare: { screen: LoginCare },
    SignUp2: { screen: SignUp2 },
    SignUp3: { screen: SignUp3 },
    SignUp4: { screen: SignUp4 },
    SignUp5: { screen: SignUp5 },
    AutomaticNoti: { screen: AutomaticNoti },
    AutomaticNoti2: { screen: AutomaticNoti2 },
    First2: { screen: drawNav2 },
  },
  {
    initialRouteName: "Slider",
  }
);
export default createAppContainer(switchNav);
