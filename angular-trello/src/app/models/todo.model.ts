export class ToDo {
  constructor(private id, private title: string, private description: string) {}

  public getTitle(): string {
    return this.title;
  }

  public getDesc(): string {
    return this.description;
  }

  public setTitle(title) {
    this.title = title;
  }

  public setDesc(desc) {
    this.description = desc;
  }

  public getIndex(): number {
    return this.id;
  }
}
