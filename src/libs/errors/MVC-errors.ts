export const MVCFetchingError = (what: string, where: "controller" | "service" | "repository", error: unknown): string => {
    return "Something went wrong fetching" + what + "from " + where + ":   " + error
}

export const MVCSavingError = (what: string, where: "controller" | "service" | "repository", error: unknown): string => {
    return "Something went wrong saving" + what + "from " + where + " to db:   " + error
}

export const MVCDeletingError = (what: string, where: "controller" | "service" | "repository", error: unknown): string => {
    return "Something went wrong deleting" + what + "from " + where + " from db:   " + error
}

export const MVCUpdatingError = (what: string, where: "controller" | "service" | "repository", error: unknown): string => {
    return "Something went wrong updating" + what + "from " + where + " to db:   " + error
}