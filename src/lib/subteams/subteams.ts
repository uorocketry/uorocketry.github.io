import PayloadSvelte from "$lib/subteams/Payload.svelte";
import AirframeSvelte from "./Airframe.svelte";
import AvionicsSvelte from "./Avionics.svelte";
import FinanceSvelte from "./Finance.svelte";
import FlightDynamicsSvelte from "./FlightDynamics.svelte";
import PropulsionSvelte from "./Propulsion.svelte";
import RecoverySvelte from "./Recovery.svelte";

const subteams: any[] = [
  {
    icon: "fa-flask",
    name: "Payload",
    component: PayloadSvelte,
  },
  {
    icon: "fa-chart-bar",
    name: "Flight Dynamics",
    component: FlightDynamicsSvelte,
  },
  {
    icon: "fa-fire",
    name: "Propulsion",
    component: PropulsionSvelte,
  },
  {
    icon: "fa-code",
    name: "Avionics",
    component: AvionicsSvelte,
  },
  {
    icon: "fa-parachute-box",
    name: "Recovery",
    component: RecoverySvelte,
  },
  {
    icon: "fa-money-bill-transfer",
    name: "Finance",
    component: FinanceSvelte,
  },
  {
    icon: "fa-rocket",
    name: "Airframe",
    component: AirframeSvelte,
  },
];

export default subteams;
