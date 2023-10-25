/* Repéré à https://codevoweb.com/pinia-vue-query-axios-jwt-authentication/ */
function middlewarePipeline(context: any, middleware: any, index: any) {
	const nextMiddleware = middleware[index];

	if (!nextMiddleware) {
		return context.next;
	}

	return () => {
		const nextPipeline = middlewarePipeline(context, middleware, index + 1);

		nextMiddleware({ ...context, next: nextPipeline });
	};
}

export default middlewarePipeline;
