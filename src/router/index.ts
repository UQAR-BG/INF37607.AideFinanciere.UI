/* Repéré à https://codevoweb.com/pinia-vue-query-axios-jwt-authentication/ */

// @ts-ignore
/* Remove vue-router import (if it exists) */
// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHistory } from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

import { useAuthStore } from "@/stores/authStore";
import middlewarePipeline from "./middlewarePipeline";

const router = createRouter({
	history: createWebHistory(),
	// You don't need to manually add the routes anymore,
	// the plugin writes it for you
	extendRoutes: (routes) => setupLayouts(routes)
});

router.beforeEach(
	(
		to: RouteLocationNormalized,
		from: RouteLocationNormalized,
		next: NavigationGuardNext
	) => {
		const authStore = useAuthStore();

		if (!to.meta.middleware) {
			return next();
		}
		const middleware = to.meta.middleware as any;

		const context = {
			to,
			from,
			next,
			authStore
		};

		return middleware[0]({
			...context,
			next: middlewarePipeline(context, middleware, 1)
		});
	}
);

export default router;
