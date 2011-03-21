// make ie support "elements unsupported by design" (e.g. <abbr>)

(function (i, tags) {
	while (
		document.createElement(tags[i]),
		tags[++i]
	);
}(0, 'abbr, article, aside, section'.replace(/\s+/g, '').split(',')));
