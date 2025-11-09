package ai

import "os"

var (
	Gronkey   = os.Getenv("IMGROKINGIT")
	goodGrok  = os.Getenv("GOODGROK")
	gigaGrok  = os.Getenv("GIGAGROK")
	evilGrok  = os.Getenv("EVILGROK")
	freakGrok = os.Getenv("FREAKGROK")
)

type Message struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

type Grokker struct {
	Messages    []Message `json:"messages"`
	Model       string    `json:"model"`
	Stream      bool      `json:"stream"`
	Temperature int       `json:"temperature"`
}

type GrokFunc func() Message

// Returns a good grok system Message struct
//
// {Role: "System", Content: "whatever"}
func GoodGrok() Message {
	return Message{
		Role:    "system",
		Content: goodGrok,
	}
}

func GigaGrok() Message {
	return Message{
		Role:    "system",
		Content: gigaGrok,
	}
}

func EvilGrok() Message {
	return Message{
		Role:    "system",
		Content: evilGrok,
	}
}

func FreakyAhhGrok() Message {
	return Message{
		Role:    "system",
		Content: freakGrok,
	}
}

func ChooseYourGrok(model string) Message {
	switch model {
	case "good":
		return GoodGrok()
	case "giga":
		return GigaGrok()
	case "evil":
		return EvilGrok()
	case "freaky":
		return FreakyAhhGrok()
	}
	return FreakyAhhGrok()
}
