import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as previewPathPrefix } from "./router-C9Gmw5OB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dc5J4cJd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const [src, setSrc] = (0, import_react.useState)("/trench-survivor.html");
	(0, import_react.useEffect)(() => {
		const next = `${previewPathPrefix(window.location.hostname, window.location.pathname) ?? ""}/trench-survivor.html${window.location.search}`;
		if (next !== "/trench-survivor.html") setSrc(next);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
		title: "Trench Survivor trading terminal",
		src,
		className: "game-frame"
	});
}
//#endregion
export { Home as component };
