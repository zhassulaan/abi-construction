export function parseProjectsInfo(data) {
  const parts = data.excerpt.split(' &#8211; ');
  return {
		id: data.id,
		title: data.title,
		date: data.date,
    type: parts.length > 0 ? parts[0].trim() : 'Default type',
    images: parts.length > 1 ? parts[1].trim().split(' &#8212; ') : ['Default images'],
    text: parts.length > 2 ? parts[2].trim() : 'Default text',
    location: parts.length > 3 ? parts[3].trim() : 'Default location',
    area: parts.length > 4 ? parts[4].trim() : 'Default area',
    deadline: parts.length > 5 ? parts[5].trim() : 'Default deadline',
  };
}
