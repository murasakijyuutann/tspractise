export {};
type Equal<A, B> =
    (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2)
    ? true
    : false;
function ok<_T extends true>(label: string): void {
    console.log(" ✓", label);
}

console.log("\n===2. T[K] (indexed access) and getProperty ===");

type User = { id: number; name: string; email: string };

type NameType = User["name"];
type IdOrName = User["id" | "name"];
