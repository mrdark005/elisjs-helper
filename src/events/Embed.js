class embed {
    constructor() {
      this.fields = [];
      this.color = undefined;
      this.description = undefined;
      this.title = undefined;
      this.author = {};
      this.image = {};
      this.thumbnail = {};
      this.footer = {};
      this.url = undefined;
    }
  
    setTitle(title) {
      this.title = title;
  
      return this;
    }
  
    setURL(url) {
      this.url = url;
  
      return this;
    }
  
    setDescription(description) {
      this.description = description;
  
      return this;
    }
  
    addField(name, value, inline = false) {
      this.fields.push({name, value, inline});
  
      return this;
    }
  
    setThumbnail(url) {
      this.thumbnail.url = url;
  
      return this;
    }
  
    setImage(url) {
      this.image.url = url;
  
      return this;
    }
  
    setTimestamp(timestamp = Date.now()) {
      this.timestamp = new Date(timestamp).toISOString();
  
      return this;
    }
  
    setColor(color) {
      this.color = color;
  
      return this;
    }
  
    setAuthor(name, iconURL, url) {
      this.author.name = name;
      this.author.icon_url = iconURL;
      this.author.url = url;
  
      return this; 
    }
  
    setFooter(text, iconURL) {
      this.footer.text = text;
      this.footer.icon_url = iconURL;
  
      return this; 
    }
  }
  
  module.exports = embed;
