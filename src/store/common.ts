import { create } from "zustand";

interface State {
	themeMode: "light" | "dark";
	isNavCollapsed: boolean;
}

interface Actions {
	toggleNavCollapsed: () => void;
	toggleThemeMode: () => void;
}

export const useCommonStore = create<State & Actions>((set, get) => ({
	themeMode: "dark",
	isNavCollapsed: true,

	toggleNavCollapsed: () => set({ isNavCollapsed: !get().isNavCollapsed }),
	toggleThemeMode: () => {
		const currentMode = get().themeMode;

		if (currentMode === "light") {
			document.body.setAttribute("theme-mode", "dark");
			set({ themeMode: "dark" });
		} else {
			document.body.removeAttribute("theme-mode");
			set({ themeMode: "light" });
		}
	},
}));
