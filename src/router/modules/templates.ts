import lazyLoad from "../lazyLoad";
import { ITemplate } from "../types";

const podName = "Diary App";

const POD1: ITemplate[] = [
  {
    label: `${podName}/Login`,
    path: `${podName}/Login`,
    element: lazyLoad(() => import("../../views/pages/login/LoginPage")),
    code: "",
  },
  {
    label: `${podName}/TabPageList`,
    path: `${podName}/TabPageList`,
    element: lazyLoad(() => import("../../views/pages/sample/SamplePage")),
    code: "",
  },
  {
    label: `${podName}/SubPageList`,
    path: `${podName}/SubPageList`,
    element: lazyLoad(() => import("../../views/pages/sample/SamplePage2")),
    code: "",
  },
  {
    label: `${podName}/main`,
    path: `${podName}/main`,
    element: lazyLoad(() => import("../../views/pages/main/MainPage")),
    code: "",
  },
];

export default POD1;
