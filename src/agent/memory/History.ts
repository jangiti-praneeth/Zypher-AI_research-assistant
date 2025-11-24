type Entry = { query: string; summary: string; sources: string[] };

export class History {
  private items: Entry[] = [];

  push(e: Entry) {
    this.items.push(e);
  }

  last(n = 5) {
    return this.items.slice(-n);
  }

  all() {
    return this.items.slice();
  }
}
