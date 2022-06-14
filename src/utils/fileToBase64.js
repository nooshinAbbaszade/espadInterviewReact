export const fileToBase64 = (data, fileType) => {
  return new Promise((resolve, reject) => {
    if (!data) return;
    const reader = new FileReader();
    let type;

    if (data.type.match('text')) type = 'text';
    else if (data.type.match('image')) type = 'image';
    else if (data.type.match('sheet')) type = 'excel';
    else type = data.type;
    
    reader.onload = (e) => {
      const src = e.target.result;
      resolve(src);
    }
    
    if (type === fileType) reader.readAsDataURL(data);
    else reject(`Please choose a valid ${fileType} file`)
  });
}